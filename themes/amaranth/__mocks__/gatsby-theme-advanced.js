const GatsbyThemeAdvanced = jest.requireActual("gatsby-theme-advanced");

jest.mock("../../advanced/src/config/useConfig");

module.exports = {
  ...GatsbyThemeAdvanced,
};
