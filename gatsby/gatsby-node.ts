/* eslint "no-console": "off" */

import path from "path";
import _ from "lodash";
import { GatsbyNode } from "gatsby";

import { BasicFrontmatter, GetMdxPostsQuery } from "./types";

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

// Gets invoked on page creation stage
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  // Paths to our page templates
  const postPage = path.resolve("src/templates/post.tsx");
  const tagPage = path.resolve("src/templates/tag.tsx");
  const categoryPage = path.resolve("src/templates/category.tsx");
  const listingPage = path.resolve("./src/templates/listing.tsx");

  // Get a full list of markdown posts sorted by publcation date
  const markdownQueryResult = await graphql<GetMdxPostsQuery>(`
    query GetMdxPosts {
      allMdx(sort: { fields: [frontmatter___datePublished], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              datePublished
            }
          }
        }
      }
    }
  `);

  // Exit on error
  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  // Create lists of unique categories and tags
  const tagSet = new Set<string>();
  const categorySet = new Set<string>();

  const postsEdges = markdownQueryResult.data?.allMdx?.edges;
  if (!postsEdges) {
    console.warn("No Mdx posts were detected. Skipping post page creation.");
    return;
  }

  // Generate listing page
  actions.createPage({
    path: `/`,
    component: listingPage,
    context: {
      limit: postsEdges.length,
      skip: 0,
      pageCount: 1,
      currentPageNum: 1,
    },
  });

  // Iterate over posts
  postsEdges.forEach((edge, index) => {
    // Add post tags to our set
    const tags = edge?.node?.frontmatter?.tags;
    if (tags) {
      tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Add post category to our set
    const category = edge?.node?.frontmatter?.category;
    if (category) {
      categorySet.add(category);
    }

    // Link the post page to next and previous pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    if (!edge.node.fields?.slug) {
      console.log(`Mdx post is missing a slug. Skipping page creation.`);
      return;
    }

    // Create a post page
    actions.createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge?.node.frontmatter?.title,
        nextslug: nextEdge?.node.fields?.slug,
        prevtitle: prevEdge?.node.frontmatter?.title,
        prevslug: prevEdge?.node.fields?.slug,
      },
    });
  });

  //  Create tag listing pages based on our set
  tagSet.forEach((tag) => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category listing pages based on our set
  categorySet.forEach((category) => {
    actions.createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });
};
