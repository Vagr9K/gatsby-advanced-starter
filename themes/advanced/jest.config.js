module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "<rootDir>/test/jest-preprocess.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file-mock.js",
  },
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "\\lib",
  ],
  transformIgnorePatterns: ["node_modules/(?!(gatsby|gatsby-plugin-mdx)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },

  testURL: "http://localhost",
  setupFiles: ["<rootDir>/test/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/test/setup-test-env.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "data/**/*.{js,jsx,ts,tsx}",
    "config/**/*.{js,jsx,ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/netlifycms/index.js",
    "src/components/SEO/tests/TestUtils.ts",
    "src/__generated__/",
  ],
};
