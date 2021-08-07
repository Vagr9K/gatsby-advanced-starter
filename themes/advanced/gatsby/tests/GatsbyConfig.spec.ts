import { mocked } from "ts-jest/utils";

import { GatsbyConfig } from "gatsby";
import gatsbyConfig from "../gatsby-config";

import * as fixtures from "../../../test/fixtures";
import * as config from "../../src/config";

jest.mock("../../src/config", () => ({
  ...jest.requireActual("../../src/config"),
  withDefaults: jest
    .fn()
    .mockImplementation((userConfig: config.SiteConfig) =>
      jest
        .requireActual<typeof import("../../src/config")>("../../src/config")
        .withDefaults(userConfig)
    ),
}));

const mockedConfig = mocked(config, true);

describe("gatsbyConfig", () => {
  it("sets a validated pathPrefix", () => {
    expect.assertions(2);

    const gatsbyConfigRes1 = gatsbyConfig({
      pathPrefix: "",
    } as config.SiteConfig);

    expect(gatsbyConfigRes1?.pathPrefix).toBe("/");

    const gatsbyConfigRes2 = gatsbyConfig({
      pathPrefix: "/vagr9k/",
    } as config.SiteConfig);

    expect(gatsbyConfigRes2?.pathPrefix).toBe("/vagr9k");
  });

  it("sets correct content and post directories", () => {
    expect.assertions(2);

    const getGatsbyFsPaths = (configRes: GatsbyConfig) => {
      const dirMapping: { assetDir?: string; contentDir?: string } = {
        assetDir: undefined,
        contentDir: undefined,
      };

      const pathList = configRes.plugins
        ?.map((pluginCfg) => {
          if (typeof pluginCfg === "string") return undefined;

          if (pluginCfg.resolve !== "gatsby-source-filesystem")
            return undefined;

          return {
            name: pluginCfg?.options?.name,
            path: pluginCfg?.options?.path,
          };
        })
        .filter(Boolean);

      pathList?.forEach((pathItem) => {
        if (pathItem?.name === "assets") dirMapping.assetDir = pathItem?.path;

        if (pathItem?.name === "posts") dirMapping.contentDir = pathItem?.path;
      });

      return dirMapping;
    };

    const gatsbyConfigRes = gatsbyConfig({
      assetDir: "ASSET_TEST",
      contentDir: "CONTENT_TEST",
    } as config.SiteConfig);

    const fsPluginPaths = getGatsbyFsPaths(gatsbyConfigRes);

    expect(fsPluginPaths.assetDir).toBe("ASSET_TEST");
    expect(fsPluginPaths.contentDir).toBe("CONTENT_TEST");
  });

  it("saves the website configuration in SiteMetadata", () => {
    expect.assertions(2);

    mockedConfig.withDefaults.mockReturnValue(fixtures.config);

    const userConfig = { website: { title: "test" } } as config.SiteConfig;
    const gatsbyConfigRes = gatsbyConfig(userConfig);

    // Make sure that user configuration is merged with the defaults
    expect(mockedConfig.withDefaults).toHaveBeenCalledWith(userConfig);
    expect(gatsbyConfigRes?.siteMetadata?.config).toStrictEqual(
      fixtures.config
    );
  });
});
