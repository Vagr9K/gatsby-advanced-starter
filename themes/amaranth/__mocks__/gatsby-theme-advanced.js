const GatsbyThemeAdvanced = jest.requireActual("gatsby-theme-advanced");
const MockedConfig = jest.requireActual("./MockedConfig");

module.exports = {
  ...GatsbyThemeAdvanced,
  ConfigProvider: MockedConfig.ConfigProvider,
  ConfigContext: MockedConfig.ConfigContext,
};
