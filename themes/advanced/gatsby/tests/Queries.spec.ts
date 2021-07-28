/* eslint-disable no-console */
import {
  getCategoryListing,
  getTagListing,
  getIndexListing,
} from "../utils/queries";

import {
  categoryListingQuery,
  tagListingQuery,
  indexListingQuery,
} from "../../src/templates/feed/queries";
import { listingQuery } from "../../../test/fixtures";

jest.spyOn(global.console, "warn").mockImplementation();
jest.spyOn(global.console, "error").mockImplementation();

const categoryQueryResponse = {
  data: {
    allMdx: {
      edges: listingQuery.allMdx.edges.filter(
        (edge) => edge.node?.frontmatter?.category === "category"
      ),
    },
  },
};
const tagQueryResponse = {
  data: {
    allMdx: {
      edges: listingQuery.allMdx.edges.filter((edge) =>
        edge.node?.frontmatter?.tags?.includes("tag")
      ),
    },
  },
};
const indexQueryResponse = { data: listingQuery };

describe("getIndexListing", () => {
  it("returns the index listing", async () => {
    expect.assertions(2);

    const graphql = jest.fn().mockResolvedValue(indexQueryResponse);

    const listing = await getIndexListing(graphql);

    expect(graphql).toHaveBeenCalledWith(indexListingQuery);
    expect(listing).toMatchSnapshot();
  });

  it("warns when no data is returned", async () => {
    expect.assertions(2);

    const graphql = jest.fn().mockResolvedValue({ data: undefined });

    const listing = await getIndexListing(graphql);

    expect(console.warn).toHaveBeenCalledWith(
      "processQueryResult: No data returned by the query. Returning empty PostList."
    );
    expect(listing).toStrictEqual([]);
  });

  it("propagates query errors", async () => {
    expect.assertions(3);

    const graphql = jest.fn().mockResolvedValue({ errors: "TEST ERROR" });

    await expect(getIndexListing(graphql)).rejects.toThrow("TEST ERROR");

    expect(console.error).toHaveBeenCalledWith(
      "Error while processing query results:"
    );
    expect(console.error).toHaveBeenCalledWith("TEST ERROR");
  });
});

describe("getTagListing", () => {
  it("returns the tag listing", async () => {
    expect.assertions(2);

    const graphql = jest.fn().mockResolvedValue(tagQueryResponse);

    const listing = await getTagListing(graphql, "tag");

    expect(graphql).toHaveBeenCalledWith(tagListingQuery, {
      tag: "tag",
    });
    expect(listing).toMatchSnapshot();
  });
});

describe("getCategoryListing", () => {
  it("returns the category listing", async () => {
    expect.assertions(2);

    const graphql = jest.fn().mockResolvedValue(categoryQueryResponse);

    const listing = await getCategoryListing(graphql, "category");

    expect(graphql).toHaveBeenCalledWith(categoryListingQuery, {
      category: "category",
    });
    expect(listing).toMatchSnapshot();
  });
});
