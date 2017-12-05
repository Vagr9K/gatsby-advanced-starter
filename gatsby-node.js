const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const moment = require("moment");
const createPaginatedPages = require("gatsby-paginate");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  let date;
  let title;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    // parse and set slug field on node
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title") &&
      node.frontmatter.title
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
      title = node.frontmatter.title;
    } else if (siteConfig.dateFormatInput.length) {
      title = parsedFilePath.name
        .substring(
          siteConfig.dateFormatInput.length + 1,
          parsedFilePath.name.length
        )
        .replace(/[-_]/, " ");
      slug = `/${title}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "title", value: _.startCase(title) || slug });

    // parse and set date field on node
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "date")
    ) {
      date = moment(node.frontmatter.date, siteConfig.dateFormatInput);
    } else {
      date = moment(
        parsedFilePath.name.substring(0, siteConfig.dateFormatInput.length),
        siteConfig.dateFormatInput
      );
    }
    if (date && date.isValid()) {
      createNodeField({ node, name: "date", value: date.toDate() });
    } else {
      console.error(`Node ${node.parent} doesn't have a valid date`);
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
              edges {
                node {
                  excerpt
                  frontmatter {
                    tags
                    category
                    title
                    cover
                    date
                  }
                  fields {
                    slug
                    date
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.error(result.errors);
          reject(result.errors);
        }

        createPaginatedPages({
          edges: result.data.allMarkdownRemark.edges,
          createPage,
          pageTemplate: "src/templates/index.jsx",
          pageLength: siteConfig.blogPageSize
        });

        const tagSet = new Set();
        const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
