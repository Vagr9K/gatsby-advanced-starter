const baseConfig = require("../../test/jest.config.base");

module.exports = {
  ...baseConfig,
  coveragePathIgnorePatterns: [
    ...baseConfig.coveragePathIgnorePatterns,
    "src/components/SEO/tests",
    "src/icons",
  ],
};
