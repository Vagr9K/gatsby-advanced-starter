/* eslint "no-console": "off" */

import path from "path";
import _ from "lodash";
import { GatsbyNode } from "gatsby";
import siteConfig from "../src/config";

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

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  // Filter by Mdx nodes
  if (node.internal.type === "Mdx" && node.parent) {
    // Find parent filenode
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

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const postPage = path.resolve("src/templates/post.tsx");
  const tagPage = path.resolve("src/templates/tag.tsx");
  const categoryPage = path.resolve("src/templates/category.tsx");
  const listingPage = path.resolve("./src/templates/listing.tsx");

  // Get a full list of markdown posts
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

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set<string>();
  const categorySet = new Set<string>();

  const postsEdges = markdownQueryResult.data?.allMdx?.edges;

  if (!postsEdges) {
    console.warn("No Mdx posts were detected. Skipping post page creation.");
    return;
  }

  // Paging
  const { postsPerPage } = siteConfig;
  if (postsPerPage) {
    const pageCount = Math.ceil(postsEdges.length / postsPerPage);

    [...Array(pageCount).keys()].forEach((pageNum) => {
      actions.createPage({
        path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
        component: listingPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount,
          currentPageNum: pageNum + 1,
        },
      });
    });
  } else {
    // Load the landing page instead
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
  }

  // Post page creating
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    const tags = edge?.node?.frontmatter?.tags;
    if (tags) {
      tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Generate a list of categories
    const category = edge?.node?.frontmatter?.category;
    if (category) {
      categorySet.add(category);
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    if (!edge.node.fields?.slug) {
      console.log(`Mdx post is missing a slug. Skipping page creation.`);
      return;
    }

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

  //  Create tag pages
  tagSet.forEach((tag) => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category pages
  categorySet.forEach((category) => {
    actions.createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });
};
