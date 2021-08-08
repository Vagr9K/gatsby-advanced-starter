const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": path.join(__dirname, "./jest-preprocess.js"),
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      path.join(__dirname, "./__mocks__/file-mock.js"),
  },
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "\\lib",
    "<rootDir>/cypress/",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby|gatsby-plugin-mdx|gatsby-theme-advanced|gatsby-theme-amaranth)/)",
  ],
  globals: {
    __PATH_PREFIX__: "",
  },

  testURL: "http://localhost",
  setupFiles: [path.join(__dirname, "./loadershim.js")],
  setupFilesAfterEnv: [path.join(__dirname, "./setup-test-env.js")],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "gatsby/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: ["src/netlifycms/index.js"],
};
