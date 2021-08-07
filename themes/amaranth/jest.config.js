const baseConfig = require("../../test/jest.config.base");

module.exports = {
  ...baseConfig,
  coveragePathIgnorePatterns: [
    ...baseConfig.coveragePathIgnorePatterns,
    "src/components/index.ts",
    "src/components/shared/index.ts",
  ],
};
