import { mocked } from "ts-jest/utils";
import cloneDeep from "clone-deep";

import {
  mdxNodeIntoPost,
  queryIntoListing,
  queryIntoPost,
  jsonPostIntoPost,
} from "./index";

import {
  listingQuery,
  postQuery,
  post as postFixture,
  config as configFixture,
} from "../../../test/fixtures";
import { MdxNode, PostFromJson } from "./types";

const consoleWarnSpy = jest
  .spyOn(global.console, "warn")
  .mockImplementation(() => {});

// Test data setup
jest.mock("../config");
const mockedConfig = mocked(configFixture, true);
mockedConfig.website.url = "http://test.com";
mockedConfig.pathPrefix = "/test";

describe("mdxNodeIntoPost", () => {
  it("generates correct post data", () => {
    expect.assertions(1);

    const post = mdxNodeIntoPost(postQuery.mdx as MdxNode);

    expect(post).toMatchSnapshot();
  });

  it("falls back to datePublished if dateModified is not set", () => {
    expect.assertions(1);

    const mdxNodeWithoutDateModified = cloneDeep(postQuery.mdx) as MdxNode;

    if (
      !mdxNodeWithoutDateModified.frontmatter ||
      !mdxNodeWithoutDateModified.frontmatter.datePublished
    )
      throw Error("Invalid postQuery object used in a test.");

    mdxNodeWithoutDateModified.frontmatter.dateModified = undefined;

    const post = mdxNodeIntoPost(mdxNodeWithoutDateModified);

    expect(post.dateModified).toStrictEqual(
      new Date(mdxNodeWithoutDateModified.frontmatter.datePublished)
    );
  });

  it("throws an error when missing MDX data", () => {
    expect.assertions(1);

    const invalidMdx = cloneDeep(postQuery.mdx) as MdxNode;

    // Test missing timeToRead
    invalidMdx.timeToRead = undefined;

    const missingTimeToReadFn = () => mdxNodeIntoPost(invalidMdx);
    const missingTimeToReadError = `Post missing timeToRead. Post slug: /big-sample-test. Aborting.`;

    expect(missingTimeToReadFn).toThrow(missingTimeToReadError);
  });

  it("throws an error when missing frontmatter data", () => {
    expect.assertions(5);

    const invalidMdx = cloneDeep(postQuery.mdx) as MdxNode;

    if (!invalidMdx.frontmatter)
      throw Error("Invalid postQuery object used in a test.");

    // Test missing coverAlt
    invalidMdx.frontmatter.coverAlt = undefined;

    const missingCoverAltFn = () => mdxNodeIntoPost(invalidMdx);
    const missingCoverAltError = `Post missing cover alt. Post slug: /big-sample-test. Aborting.`;

    expect(missingCoverAltFn).toThrow(missingCoverAltError);

    // Test missing cover
    invalidMdx.frontmatter.cover = undefined;

    const missingCoverFn = () => mdxNodeIntoPost(invalidMdx);
    const missingCoverError = `Post missing cover image. Post slug: /big-sample-test. Aborting.`;

    expect(missingCoverFn).toThrow(missingCoverError);

    // Test missing datePublished
    invalidMdx.frontmatter.datePublished = undefined;

    const missingPublicationDateFn = () => mdxNodeIntoPost(invalidMdx);
    const missingPubDateError = `Post missing publication date. Post slug: /big-sample-test. Aborting.`;

    expect(missingPublicationDateFn).toThrow(missingPubDateError);

    // Test missing title
    invalidMdx.frontmatter.title = undefined;

    const missingTitleFn = () => mdxNodeIntoPost(invalidMdx);
    const missingTitleError = `Post missing title. Post slug: /big-sample-test. Aborting.`;

    expect(missingTitleFn).toThrow(missingTitleError);

    // Test missing frontmatter
    invalidMdx.frontmatter = undefined;

    const missingFrontmatterFn = () => mdxNodeIntoPost(invalidMdx);
    const missingFrontmatterError = `Post missing frontmatter. Post slug: /big-sample-test. Aborting.`;

    expect(missingFrontmatterFn).toThrow(missingFrontmatterError);
  });

  it("throws an error when missing fields", () => {
    expect.assertions(5);

    const invalidMdx = cloneDeep(postQuery.mdx) as MdxNode;

    if (!invalidMdx.fields)
      throw Error("Invalid postQuery object used in a test.");

    // Test missing route
    invalidMdx.fields.route = undefined;

    const missingRouteFn = () => mdxNodeIntoPost(invalidMdx);
    const missingRouteError = `Post missing route. Post slug: /big-sample-test. Aborting.`;

    expect(missingRouteFn).toThrow(missingRouteError);

    // Test missing url
    invalidMdx.fields.url = undefined;

    const missingUrlFn = () => mdxNodeIntoPost(invalidMdx);
    const missingUrlError = `Post missing url. Post slug: /big-sample-test. Aborting.`;

    expect(missingUrlFn).toThrow(missingUrlError);

    // Test missing pathName
    invalidMdx.fields.pathName = undefined;

    const missingPathNameFn = () => mdxNodeIntoPost(invalidMdx);
    const missingPathNameError = `Post missing pathName. Post slug: /big-sample-test. Aborting.`;

    expect(missingPathNameFn).toThrow(missingPathNameError);

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

describe("jsonPostIntoPost", () => {
  it("correctly converts JSON based post metadata into a Post", () => {
    expect.assertions(2);

    const jsonPost = JSON.parse(JSON.stringify(postFixture)) as PostFromJson;

    const generatedPost = jsonPostIntoPost(jsonPost);

    expect(generatedPost).toMatchSnapshot();

    // Test postMetadata with related data
    const postFixtureWithRelated = cloneDeep(postFixture);
    postFixtureWithRelated.relatedPosts = [postFixture];

    const jsonPostWithRelated = JSON.parse(
      JSON.stringify(postFixtureWithRelated)
    ) as PostFromJson;

    const generatedPostWithRelated = jsonPostIntoPost(jsonPostWithRelated);

    expect(generatedPostWithRelated).toMatchSnapshot();
  });
});
