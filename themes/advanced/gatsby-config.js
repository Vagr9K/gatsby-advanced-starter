require("source-map-support").install();
require("ts-node").register({
  transpileOnly: false,
  files: true,
  ignore: ["(?:^|/)node_modules/", "(?:^|/).cache/", "(?:^|/)public/"],
});

module.exports = require("./gatsby/gatsby-config");
