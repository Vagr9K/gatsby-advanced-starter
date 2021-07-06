/* eslint "no-console": "off" */

import path from "path";
import _ from "lodash";
import { GatsbyNode } from "gatsby";

import { BasicFrontmatter } from "./types";
import { getIndexListing, getTagListing, getCategoryListing } from "./queries";
import { initFeedMeta, createFeed } from "./feeds";
import getRelatedPosts from "./posts/getRelatedPosts";

const POST_PAGE_COMPONENT = require.resolve("../src/templates/post/index.tsx");

// Generates a slug from provided frontmatter/file path
const generateSlug = (
  parsedFilePath: path.ParsedPath,
  frontmatter?: BasicFrontmatter
): string => {
  if (frontmatter) {
    const { slug, title } = frontmatter;
    if (slug) return `/${_.kebabCase(slug)}`;

    if (title) return `/${_.kebabCase(title)}`;
  }

  if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
    return `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  }
  if (parsedFilePath.dir === "") {
    return `/${parsedFilePath.name}/`;
  }
  return `/${parsedFilePath.dir}/`;
};

// Gets invoked on GraphQl node creation
export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  // Filter by Mdx nodes
  if (node.internal.type === "Mdx" && node.parent) {
    // Find parent filenode created by gatsby-source-filesystem
    const fileNode = getNode(node.parent);

    // Parse the path and the frontmatter
    const parsedFilePath = path.parse(fileNode.relativePath as string);
    const frontmatter = node.frontmatter as BasicFrontmatter;

    // Generate a slug
    const slug = generateSlug(parsedFilePath, frontmatter);

    // Set it as a field
    actions.createNodeField({ node, name: "slug", value: slug });
  }
};

// Customize Gatsby schema
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    // Make sure the cover is a file node
    actions.createTypes(`
   type Mdx implements Node {
     frontmatter: Frontmatter
   }
   type Frontmatter {
     cover: File
   }
 `);
  };

// Gets invoked on page creation stage
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  // Paths to our page templates

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
      path: post.slug,
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
  await createFeed(actions, fullListing, "index");

  //  Create tag listing feeds based on our set
  const tagTasks = Array.from(tagSet.keys()).map(async (tag) => {
    const tagListing = await getTagListing(graphql, tag);

    await createFeed(actions, tagListing, "tag", tag);
  });

  await Promise.all(tagTasks);

  // Create category listing feeds based on our set
  const categoryTasks = Array.from(categorySet.keys()).map(async (category) => {
    const categoryListing = await getCategoryListing(graphql, category);

    await createFeed(actions, categoryListing, "category", category);
  });

  await Promise.all(categoryTasks);
};
