import { cloneDeep } from "lodash";

import { withDefaults, withBasePath } from "./index";

import { SiteConfig } from "./types";

import defaultConfig from "./defaultConfig";

const expectedMergedConfig = cloneDeep(defaultConfig);
expectedMergedConfig.website.title = "TestTitle";
expectedMergedConfig.pathPrefix = "";

describe("configuration function withDefaults", () => {
  it("properly merges user configuration with the default one", () => {
    expect.assertions(1);

    const mergedConfig = withDefaults({
      website: { title: "TestTitle" },
    } as SiteConfig);

    expect(mergedConfig).toStrictEqual(expectedMergedConfig);
  });
});

describe("configuration function withBasePath", () => {
  it("correctly adds basePath to the URL", () => {
    expect.assertions(1);

    const config = cloneDeep<SiteConfig>(defaultConfig);
    config.basePath = "/base";

    const fullUrl = withBasePath(config, "/test/url");

    expect(fullUrl).toBe("/base/test/url");
  });

  it("doesn't add basePath if not specified", () => {
    expect.assertions(1);

    const config = cloneDeep<SiteConfig>(defaultConfig);
    config.basePath = undefined;

    const fullUrl = withBasePath(config, "/test/url");

    expect(fullUrl).toBe("/test/url");
  });
});
