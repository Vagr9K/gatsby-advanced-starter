import {
  Node,
  CreateNodeArgs,
  PluginOptions,
  CreateSchemaCustomizationArgs,
  CreatePagesArgs,
} from "gatsby";
import { mocked } from "ts-jest/utils";
import cloneDeep from "clone-deep";

import {
  onCreateNode,
  createSchemaCustomization,
  createPages,
} from "../gatsby-node";

import { GatsbyActionsMock } from "./Utils";
import { config as configFixture } from "../../../test/fixtures";

import * as feedUtils from "../utils/feeds";

const mockedGatsbyActions = mocked(GatsbyActionsMock, true);

type NodeArgs = CreateNodeArgs<Record<string, unknown>>;

jest.spyOn(global.console, "error").mockImplementation();

const mockedConsole = mocked(global.console, true);

jest.mock("../utils/feeds", () => ({
  createFeed: jest.fn(),
  initFeedMeta: jest.fn(),
}));

const mockedFeedUtils = mocked(feedUtils, true);

jest.mock("../utils/queries", () => {
  const postListingFixture = jest.requireActual<
    typeof import("../../../test/fixtures")
  >("../../../test/fixtures").postListing;

  const testListing = [
    ...postListingFixture,
    { ...postListingFixture[0], category: undefined, tags: undefined },
  ];

  return {
    getIndexListing: jest.fn().mockResolvedValue(testListing),
    getTagListing: jest.fn().mockResolvedValue(testListing),
    getCategoryListing: jest.fn().mockResolvedValue(testListing),
  };
});

describe("onCreateNode", () => {
  it("sets proper fields for MDX nodes", async () => {
    expect.assertions(4);

    const testNode = {
      id: "testId",
      children: [],
      parent: "parentId",
      internal: {
        type: "Mdx",
        contentDigest: "testDigest",
        owner: "testOwner",
      },
      frontmatter: {
        title: "Test Title",
        slug: "Test Slug",
      },
    } as Node;

    const nodeArgs = {
      actions: GatsbyActionsMock,
      node: testNode,
    } as unknown as NodeArgs;

    const testConfig = cloneDeep(configFixture);
    testConfig.pathPrefix = "/testPrefix";
    testConfig.basePath = "/testBasePath";
    testConfig.website.url = "https://example.com";

    const pluginOptpions = testConfig as unknown as PluginOptions;

    if (!onCreateNode) throw Error("onCreateNode is undefined.");

    await onCreateNode(nodeArgs, pluginOptpions, () => {});

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
      node: testNode,
      name: "slug",
      value: "/test-slug",
    });

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
      node: testNode,
      name: "route",
      value: "/testBasePath/test-slug",
    });

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
      node: testNode,
      name: "pathName",
      value: "/testPrefix/testBasePath/test-slug",
    });

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
      node: testNode,
      name: "url",
      value: "https://example.com/testPrefix/testBasePath/test-slug",
    });
  });

  it("sets proper slug field for MDX nodes when missing the frontmatter slug field", async () => {
    expect.assertions(1);

    const testNode = {
      id: "testId",
      children: [],
      parent: "parentId",
      internal: {
        type: "Mdx",
        contentDigest: "testDigest",
        owner: "testOwner",
      },
      frontmatter: {
        title: "Test Title",
      },
    } as Node;

    const nodeArgs = {
      actions: GatsbyActionsMock,
      node: testNode,
    } as unknown as NodeArgs;

    // eslint-disable-next-line jest/no-if
    if (!onCreateNode) throw Error("onCreateNode is undefined.");

    await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledWith({
      node: testNode,
      name: "slug",
      value: "/test-title",
    });
  });

  it("logs an error when fails to generate a slug", async () => {
    expect.assertions(2);

    const testNode = {
      id: "testId",
      children: [],
      parent: "parentId",
      internal: {
        type: "Mdx",
        contentDigest: "testDigest",
        owner: "testOwner",
      },
      frontmatter: {},
    } as Node;

    const nodeArgs = {
      actions: GatsbyActionsMock,
      node: testNode,
    } as unknown as NodeArgs;

    // eslint-disable-next-line jest/no-if
    if (!onCreateNode) throw Error("onCreateNode is undefined.");

    await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

    expect(mockedConsole.error).toHaveBeenCalledWith(
      "onCreateNode: Failed to generate a slug for an MDX post. Aborting."
    );

    nodeArgs.node.frontmatter = undefined;
    mockedConsole.error.mockClear();

    await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

    expect(mockedConsole.error).toHaveBeenCalledWith(
      "onCreateNode: Failed to generate a slug for an MDX post. Aborting."
    );
  });

  it("ignores non-MDX nodes", async () => {
    expect.assertions(1);

    const testNode = {
      id: "testId",
      children: [],
      parent: "parentId",
      internal: {
        type: "not-mdx",
        contentDigest: "testDigest",
        owner: "testOwner",
      },
    } as Node;

    const nodeArgs = {
      actions: GatsbyActionsMock,
      node: testNode,
    } as unknown as NodeArgs;

    // eslint-disable-next-line jest/no-if
    if (!onCreateNode) throw Error("onCreateNode is undefined.");

    mockedGatsbyActions.createNodeField.mockClear();

    await onCreateNode(nodeArgs, {} as PluginOptions, () => {});

    expect(mockedGatsbyActions.createNodeField).toHaveBeenCalledTimes(0);
  });
});

describe("createSchemaCustomization", () => {
  it("sets GraphQL schema types", async () => {
    expect.assertions(1);

    // eslint-disable-next-line jest/no-if
    if (!createSchemaCustomization)
      throw Error("createSchemaCustomization is undefined.");

    await createSchemaCustomization(
      { actions: GatsbyActionsMock } as CreateSchemaCustomizationArgs,
      {} as PluginOptions,
      () => {}
    );

    expect(mockedGatsbyActions.createTypes).toHaveBeenCalledTimes(1);
  });
});

type CreatePagesFirstArg = CreatePagesArgs & {
  traceId: "initial-createPages";
};

describe("createPages", () => {
  it("creates feed and post pages", async () => {
    expect.assertions(5);

    // eslint-disable-next-line jest/no-if
    if (!createPages) throw Error("createPages is undefined.");

    await createPages(
      {
        graphql: jest.fn(),
        actions: GatsbyActionsMock,
      } as unknown as CreatePagesFirstArg,
      {} as PluginOptions,
      () => {}
    );

    expect(mockedFeedUtils.initFeedMeta).toHaveBeenCalledTimes(1);
    expect(mockedGatsbyActions.createPage).toHaveBeenCalledTimes(9);

    expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      "index"
    );

    expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      "tag",
      expect.anything()
    );
    expect(mockedFeedUtils.createFeed).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      "category",
      expect.anything()
    );
  });
});
