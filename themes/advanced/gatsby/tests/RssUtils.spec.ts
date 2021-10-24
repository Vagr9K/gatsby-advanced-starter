import { mocked } from "ts-jest/utils";
import { config as configFixture, listingQuery } from "../../../test/fixtures";
import { GatsbyFeedQuery, GatsbyPluginFeedData } from "../types";
import { getSerialize, setup } from "../utils/rss";

jest.spyOn(global.console, "warn").mockImplementation();

const mockedConsole = mocked(global.console, true);

const testQuery = {
  ...listingQuery,
  site: {
    siteMetadata: {
      rssMetadata: {
        generator: "Test",
      },
    },
  },
} as unknown as GatsbyFeedQuery;

const testFeedData: GatsbyPluginFeedData = {
  title: "test",
  site_url: "https://example.com/",
  plugins: [],
  generator: "TestGen",
  output: "",
  feeds: [],
  query: testQuery,
};

describe("getSerialize", () => {
  it("correctly maps graphql data to a feed", () => {
    expect.assertions(1);

    const serialize = getSerialize(configFixture);

    const serializedData = serialize(testFeedData);

    expect(serializedData).toMatchSnapshot();
  });

  it("warns when no items are returned by the query", () => {
    expect.assertions(1);

    const serialize = getSerialize(configFixture);

    serialize({ ...testFeedData, query: {} });

    expect(mockedConsole.warn).toHaveBeenCalledWith(
      "No Mdx edges available for feed generation."
    );
  });
});

describe("setup", () => {
  it("sets the correct feed generator name", () => {
    expect.assertions(1);

    const serializedData = setup(testFeedData);

    expect(serializedData.generator).toBe("GatsbyJS Advanced Starter");
  });

  it("throws when missing rssMetadata", () => {
    expect.assertions(1);

    const throwFunc = () => setup({ ...testFeedData, query: {} });

    expect(throwFunc).toThrow(
      "gatsby-plugin-feed rssMetadata is missing. Aborting feed setup."
    );
  });
});
