const { cloneDeep } = require("lodash");
const validateSiteConfig = require("./Validator");

const mainConfig = {
  pathPrefix: "/",
  website: {
    url: "http://www.example-website-url.com",
    rss: "test",
    logoUrl: "/test/URL",
  },
  organization: { url: "http://www.example-org-url.com", logoUrl: "/test/URL" },
};

describe("siteConfig validator", () => {
  it("makes sure pathPrefix is empty if not needed", () => {
    expect.assertions(1);
    const config = validateSiteConfig(cloneDeep(mainConfig));

    expect(config.pathPrefix).toBe("");
  });

  it("makes sure pathPrefix only contains the first forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(mainConfig),
      pathPrefix: "/test/",
    });

    expect(config.pathPrefix).toBe("/test");
  });

  it("makes sure website.url doesn't have an ending forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(mainConfig),
      pathPrefix: "/test/",
    });

    expect(config.website.url).toBe("http://www.example-website-url.com");
  });

  it("makes sure website.rss has a starting forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(mainConfig),
      pathPrefix: "/test/",
    });

    expect(config.website.rss).toBe("/test");
  });

  it("throws and error when website.url is not an absolute URL", () => {
    expect.assertions(1);

    const testConfig = cloneDeep(mainConfig);
    testConfig.website.url = "/not-absoulte-url/";

    expect(() =>
      validateSiteConfig({ ...testConfig, pathPrefix: "/test/" })
    ).toThrow("SiteConfig.website.url is not absolute.");
  });

  it("throws and error when organization.url is not an absolute URL", () => {
    expect.assertions(1);

    const testConfig = cloneDeep(mainConfig);
    testConfig.organization.url = "/not-absoulte-url/";

    expect(() =>
      validateSiteConfig({ ...testConfig, pathPrefix: "/test/" })
    ).toThrow("SiteConfig.organization.url is not absolute.");
  });
});
