import { cloneDeep } from "lodash";
import validateSiteConfig from "./Validator";
import { config as configFixture } from "../../../test/fixtures";

// Setup a configuration for a test
const testConfig = cloneDeep(configFixture);
testConfig.pathPrefix = "/";
testConfig.website.url = "http://www.example-website-url.com";
testConfig.website.rss = "test";
testConfig.website.logoUrl = "/test/URL";
testConfig.organization = {
  url: "http://www.example-org-url.com",
  logoUrl: "/test/URL",
  name: "test-org-name",
  description: "test-org-description",
};

describe("siteConfig validator", () => {
  it("makes sure pathPrefix is empty if not needed", () => {
    expect.assertions(1);
    const config = validateSiteConfig(cloneDeep(testConfig));

    expect(config.pathPrefix).toBe("");
  });

  it("makes sure pathPrefix only contains the first forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(testConfig),
      pathPrefix: "/test/",
    });

    expect(config.pathPrefix).toBe("/test");
  });

  it("makes sure website.url doesn't have an ending forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(testConfig),
      pathPrefix: "/test/",
    });

    expect(config.website.url).toBe("http://www.example-website-url.com");
  });

  it("makes sure website.rss has a starting forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({
      ...cloneDeep(testConfig),
      pathPrefix: "/test/",
    });

    expect(config.website.rss).toBe("/test");
  });

  it("throws and error when website.url is not an absolute URL", () => {
    expect.assertions(1);

    const config = cloneDeep(testConfig);
    config.website.url = "/not-absoulte-url/";

    expect(() =>
      validateSiteConfig({ ...config, pathPrefix: "/test/" })
    ).toThrow("SiteConfig.website.url is not absolute.");
  });

  it("throws and error when organization.url is not an absolute URL", () => {
    expect.assertions(1);

    const config = cloneDeep(testConfig);
    config.organization = {
      url: "/not-absolute-url",
      logoUrl: "/test/URL",
      name: "test-org-name",
      description: "test-org-description",
    };

    expect(() =>
      validateSiteConfig({ ...config, pathPrefix: "/test/" })
    ).toThrow("SiteConfig.organization.url is not absolute.");
  });
});
