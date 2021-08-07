const gatsbyNode = require("./gatsby/gatsby-node");

module.exports = {
  onCreateNode: gatsbyNode.onCreateNode,
  createSchemaCustomization: gatsbyNode.createSchemaCustomization,
  createPages: gatsbyNode.createPages,
};
