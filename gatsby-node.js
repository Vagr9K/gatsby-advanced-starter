/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({ node, name: "date", value: date.toISOString() });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const listingPage = path.resolve("./src/templates/listing.jsx");
  const postPage = path.resolve("./src/templates/post.jsx");
  const tagPage = path.resolve("./src/templates/byTag.jsx");
  const categoryPage = path.resolve("./src/templates/byCategory.jsx");

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
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

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // if directory else interview page creation
  markdownQueryResult.data.allMarkdownRemark.edges.forEach((edge) => {
    if (
      edge.node.frontmatter.category === "A" ||
      edge.node.frontmatter.category === "B" ||
      edge.node.frontmatter.category === "C" ||
      edge.node.frontmatter.category === "D" ||
      edge.node.frontmatter.category === "E" ||
      edge.node.frontmatter.category === "F" ||
      edge.node.frontmatter.category === "G" ||
      edge.node.frontmatter.category === "H" ||
      edge.node.frontmatter.category === "I" ||
      edge.node.frontmatter.category === "J" ||
      edge.node.frontmatter.category === "K" ||
      edge.node.frontmatter.category === "L" ||
      edge.node.frontmatter.category === "M" ||
      edge.node.frontmatter.category === "N" ||
      edge.node.frontmatter.category === "O" ||
      edge.node.frontmatter.category === "P" ||
      edge.node.frontmatter.category === "Q" ||
      edge.node.frontmatter.category === "R" ||
      edge.node.frontmatter.category === "S" ||
      edge.node.frontmatter.category === "T" ||
      edge.node.frontmatter.category === "U" ||
      edge.node.frontmatter.category === "V" ||
      edge.node.frontmatter.category === "W" ||
      edge.node.frontmatter.category === "X" ||
      edge.node.frontmatter.category === "Y" ||
      edge.node.frontmatter.category === "Z" ||
      edge.node.frontmatter.category === "numbers"
    ) {
      // Paging for directory
      const { postsPerPage } = siteConfig;
      const pageCount = Math.ceil(postsEdges.length / postsPerPage);

      [...Array(pageCount)].forEach((_val, pageNum) => {
        createPage({
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
    } else if (edge.node.frontmatter.category === "interview") {
      // else interview

      createPage({
        path: edge.node.fields.slug,
        component: postPage,
        context: {
          slug: edge.node.fields.slug,
          // nexttitle: nextEdge.node.frontmatter.title,
          // nextslug: nextEdge.node.fields.slug,
          // prevtitle: prevEdge.node.frontmatter.title,
          // prevslug: prevEdge.node.fields.slug
        },
      });
    }

    postsEdges.forEach((edge, index) => {
      // Generate a list of tags
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }

      // Generate a list of categories (singlar)
      if (edge.node.frontmatter.category) {
        categorySet.add(edge.node.frontmatter.category);
      }

      // // Generate a list of categories (plural)
      // if (edge.node.frontmatter.category) {
      //   edge.node.frontmatter.categoryforEach(category => {
      //     categorySet.add(category);
      //   });
      // }

      // Create post pages
      const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
      const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
      const nextEdge = postsEdges[nextID];
      const prevEdge = postsEdges[prevID];
    });
  });

  //  Create tag pages
  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: { tag },
    });
  });

  // Create category pages
  categorySet.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: { category },
    });
  });
};
