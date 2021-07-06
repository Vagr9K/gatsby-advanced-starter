import { mocked } from "ts-jest/utils";
import cloneDeep from "clone-deep";

import { mdxNodeIntoPost, queryIntoListing, queryIntoPost } from "./index";

import { listingQuery, postQuery } from "../../test/sampleData";
import { defaultConfig, SiteConfig } from "../config";
import { MdxNode } from "./types";

const consoleWarnSpy = jest
  .spyOn(global.console, "warn")
  .mockImplementation(() => {});

// Test data setup
jest.mock("../config");
const mockedConfig = mocked(defaultConfig as SiteConfig, true);
mockedConfig.website.url = "http://test.com";
mockedConfig.pathPrefix = "/test";

describe("mdxNodeIntoPost", () => {
  it("generates correct post data", () => {
    expect.assertions(1);

    const postList = mdxNodeIntoPost(postQuery.mdx as MdxNode);

    expect(postList).toMatchSnapshot();
  });

  it("throws an error when missing frontmatter", () => {
    expect.assertions(2);

    const invalidMdx = cloneDeep(postQuery.mdx) as MdxNode;

    if (!invalidMdx.frontmatter)
      throw Error("Invalid postQuery object used in a test.");

    // Test missing datePublished
    invalidMdx.frontmatter.datePublished = undefined;

    const missingPublicationDateFn = () => mdxNodeIntoPost(invalidMdx);
    const missingPubDateError = `Post missing publication date. Post slug: /big-sample-test. Aborting.`;

    expect(missingPublicationDateFn).toThrow(missingPubDateError);

    // Test missing frontmatter
    invalidMdx.frontmatter = undefined;

    const missingFrontmatterFn = () => mdxNodeIntoPost(invalidMdx);
    const missingFrontmatterError = `Post missing frontmatter. Post slug: /big-sample-test. Aborting.`;

    expect(missingFrontmatterFn).toThrow(missingFrontmatterError);
  });

  it("throws an error when missing fields", () => {
    expect.assertions(2);

    const invalidMdx = cloneDeep(postQuery.mdx) as MdxNode;

    if (!invalidMdx.fields)
      throw Error("Invalid postQuery object used in a test.");

    // Test missing slug
    invalidMdx.fields.slug = undefined;

    const missingSlugFn = () => mdxNodeIntoPost(invalidMdx);
    const missingSlugError = `Post missing slug. Post title: Big Test. Aborting.`;

    expect(missingSlugFn).toThrow(missingSlugError);

    // Test missing fields
    invalidMdx.fields = undefined;

    const missingFieldsFn = () => mdxNodeIntoPost(invalidMdx);
    const missingFieldsError = `Post missing fields. Post title: Big Test. Aborting.`;

    expect(missingFieldsFn).toThrow(missingFieldsError);
  });

  it("warns about SEO fields missing", () => {
    expect.assertions(2);

    const partialMdx = cloneDeep(postQuery.mdx) as MdxNode;

    if (!partialMdx.frontmatter)
      throw Error("Invalid postQuery object used in a test.");

    // Test missing description and cover
    partialMdx.frontmatter.description = undefined;

    mdxNodeIntoPost(partialMdx);

    const descriptionWarning = `Post missing description. Post slug: /big-sample-test. SEO capabilities will be limited.`;

    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledWith(descriptionWarning);
  });
});

describe("queryIntoPost", () => {
  it("generates correct post data", () => {
    expect.assertions(1);

    const post = queryIntoPost(postQuery);

    expect(post).toMatchSnapshot();
  });

  it("throws an error on missing data", () => {
    expect.assertions(1);

    const invalidPostFn = () => queryIntoPost({ mdx: undefined });
    const invalidPostError =
      "convertPostQueryResponseIntoPost: Query doesn't contain post data. Aborting.";

    expect(invalidPostFn).toThrow(invalidPostError);
  });
});

describe("queryIntoListing", () => {
  it("generates correct post list", () => {
    expect.assertions(1);

    const postList = queryIntoListing(listingQuery);

    expect(postList).toMatchSnapshot();
  });
});
