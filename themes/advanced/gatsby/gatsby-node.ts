/* eslint "no-console": "off" */

import path from "path";
import { kebabCase } from "lodash";
import { ITSConfigFn } from "gatsby-plugin-ts-config";

import urlJoin from "url-join";
import { BasicFrontmatter } from "./types";
import { getIndexListing, getTagListing, getCategoryListing } from "./queries";
import { initFeedMeta, createFeed } from "./feeds";
import getRelatedPosts from "./posts/getRelatedPosts";
import {
  schema as configSchema,
  SiteConfig,
  withBasePath,
  withDefaults,
} from "../src/config";

const POST_PAGE_COMPONENT = require.resolve("../src/templates/post/index.tsx");

// Generates a slug from provided frontmatter/file path
const generateSlug = (
  parsedFilePath: path.ParsedPath,
  frontmatter?: BasicFrontmatter
): string => {
  if (frontmatter) {
    const { slug, title } = frontmatter;
    if (slug) return `/${kebabCase(slug)}`;

    if (title) return `/${kebabCase(title)}`;
  }

  if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  }
  if (parsedFilePath.dir === "") {
    return `/${parsedFilePath.name}/`;
  }
  return `/${parsedFilePath.dir}/`;
};

const gatsbyNode: ITSConfigFn<"node", SiteConfig> = (
  _,
  userConfig: SiteConfig
) => ({
  // Gets invoked on GraphQl node creation
  onCreateNode: ({ node, actions, getNode }) => {
    const config = withDefaults(userConfig);

    // Filter by Mdx nodes
    if (node.internal.type === "Mdx" && node.parent) {
      // Find parent filenode created by gatsby-source-filesystem
      const fileNode = getNode(node.parent);

      // Parse the path and the frontmatter
      const parsedFilePath = path.parse(fileNode.relativePath as string);
      const frontmatter = node.frontmatter as BasicFrontmatter;

      // Generate a slug
      const slug = generateSlug(parsedFilePath, frontmatter);

      // Route is the pathName without the pathPrefix, used for creating pages
      const route = withBasePath(config, slug);

      // Pathname is used for internal linking
      const pathName = urlJoin(config.pathPrefix, route);

      // URL is the absolute website url to the post
      const url = urlJoin(config.website.url, pathName);

      // Set route/url/pathName/slug fields
      actions.createNodeField({ node, name: "slug", value: slug });
      actions.createNodeField({ node, name: "route", value: route });
      actions.createNodeField({ node, name: "pathName", value: pathName });
      actions.createNodeField({ node, name: "url", value: url });
    }
  },

  // Customize Gatsby schema
  createSchemaCustomization: ({ actions }) => {
    // Make sure the cover is a file node
    actions.createTypes(`#graphql
     type Mdx implements Node {
       frontmatter: Frontmatter
     }
     type Frontmatter {
       cover: File
     }

     ${configSchema}
   `);
  },

  // Gets invoked on page creation stage
  createPages: async ({ graphql, actions }, themeOptions) => {
    const config = withDefaults(themeOptions as unknown as SiteConfig);

    // Create lists of unique categories and tags
    const tagSet = new Set<string>();
    const categorySet = new Set<string>();

    // Initialize feed metadata
    initFeedMeta();

    // Get full post listing
    const fullListing = await getIndexListing(graphql);

    // Iterate over posts
    fullListing.forEach((post, index) => {
      // Add post tags to our set
      const { tags } = post;
      if (tags) {
        tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }

      // Add post category to our set
      const { category } = post;
      if (category) {
        categorySet.add(category);
      }

      // Link the post page to next and previous pages
      const nextID = index + 1 < fullListing.length ? index + 1 : 0;
      const prevID = index - 1 >= 0 ? index - 1 : fullListing.length - 1;
      const nextPost = fullListing[nextID];
      const prevPost = fullListing[prevID];

      // Posts related to the current post
      const relatedPosts = getRelatedPosts(post, fullListing);

      // Create a post page
      actions.createPage({
        path: post.route,
        component: POST_PAGE_COMPONENT,
        context: {
          slug: post.slug,
          nexttitle: nextPost?.title,
          nextslug: nextPost?.slug,
          prevtitle: prevPost?.title,
          prevslug: prevPost?.slug,
          relatedPosts,
        },
      });
    });

    // Create a main "index" feed
    await createFeed(config, actions, fullListing, "index");

    //  Create tag listing feeds based on our set
    const tagTasks = Array.from(tagSet.keys()).map(async (tag) => {
      const tagListing = await getTagListing(graphql, tag);

      await createFeed(config, actions, tagListing, "tag", tag);
    });

    await Promise.all(tagTasks);

    // Create category listing feeds based on our set
    const categoryTasks = Array.from(categorySet.keys()).map(
      async (category) => {
        const categoryListing = await getCategoryListing(graphql, category);

        await createFeed(
          config,
          actions,
          categoryListing,
          "category",
          category
        );
      }
    );

    await Promise.all(categoryTasks);
  },
});

export default gatsbyNode;
