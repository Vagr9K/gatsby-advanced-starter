const babelJest = require("babel-jest");

const babelOptions = {
  presets: [
    "@babel/preset-react",
    "babel-preset-gatsby",
    "@babel/preset-typescript",
  ],
};

// @ts-ignore
module.exports = babelJest.default.createTransformer(babelOptions);
