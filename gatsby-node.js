const path = require('path');
const _ = require('lodash');
const webpackLodashPlugin = require('lodash-webpack-plugin');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/templates/tag.jsx');
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `,
      ).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        result.data.allMarkdownRemark.edges.forEach((edge) => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach((tag) => {
              tagSet.add(tag);
            });
          }
          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
            },
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });
      }),
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
}
;
