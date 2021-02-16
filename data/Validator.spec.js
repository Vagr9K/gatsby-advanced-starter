const validateSiteConfig = require("./Validator");

const textConfig = {
  pathPrefix: "/",
  website: { url: "/test/", rss: "test" },
};

describe("siteConfig validator", () => {
  it("makes sure pathPrefix is empty if not needed", () => {
    expect.assertions(1);
    const config = validateSiteConfig(textConfig);

    expect(config.pathPrefix).toBe("");
  });

  it("makes sure pathPrefix only contains the first forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({ ...textConfig, pathPrefix: "/test/" });

    expect(config.pathPrefix).toBe("/test");
  });

  it("makes sure website.url doesn't have an ending forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({ ...textConfig, pathPrefix: "/test/" });

    expect(config.website.url).toBe("/test");
  });

  it("makes sure website.rss has a starting forward slash", () => {
    expect.assertions(1);
    const config = validateSiteConfig({ ...textConfig, pathPrefix: "/test/" });

    expect(config.website.rss).toBe("/test");
  });
});
