import removeMd from "remove-markdown";
import cloneDeep from "clone-deep";
import { generatePostData, generateSeoData } from "../Utils";
import { sampleSeoData } from "./TestUtils";
import * as sampleData from "../../../../../test/fixtures";

describe("seo utility generateSeoData", () => {
  it("correctly generates website SEO metadata", () => {
    expect.assertions(7);

    const websiteData = sampleSeoData.website;

    const seoData = generateSeoData(websiteData);

    expect(seoData.title).toBe(websiteData.title);
    expect(seoData.description).toBe(websiteData.description);
    expect(seoData.url).toBe(websiteData.url);
    expect(seoData.imageUrl).toBe(websiteData.logoUrl);
    expect(seoData.imageAlt).toBe(websiteData.description);
    expect(seoData.type).toBe("website");
    expect(seoData.isArticle).toBe(false);
  });

  it("correctly generates article SEO metadata", () => {
    expect.assertions(7);

    const postData = sampleSeoData.post;

    const seoData = generateSeoData(sampleSeoData.website, postData);

    expect(seoData.title).toBe(postData.title);
    expect(seoData.description).toBe(postData.description);
    expect(seoData.url).toBe(postData.url);
    expect(seoData.imageUrl).toBe(postData.coverImageUrl);
    expect(seoData.imageAlt).toBe(postData.coverImageAlt);
    expect(seoData.type).toBe("article");
    expect(seoData.isArticle).toBe(true);
  });
});

describe("seo utility generatePostData", () => {
  it("correctly generates post SEO metadata", () => {
    expect.assertions(9);

    const { post } = sampleData;

    const postData = generatePostData(post);

    expect(postData.body).toBe(removeMd(post.internalContent as string));
    expect(postData.category).toBe(post.category);
    expect(postData.coverImageUrl).toBe(post.coverImageUrl);
    expect(postData.coverImageAlt).toBe(post.coverImageAlt);
    expect(postData.datePublished).toBe(post.datePublished);
    expect(postData.dateModified).toBe(post.dateModified);
    expect(postData.description).toBe(post.description);
    expect(postData.tags).toBe(post.tags);
    expect(postData.title).toBe(post.title);
  });

  it("correctly strips markdown formatting from the article content", () => {
    expect.assertions(1);

    const post = cloneDeep(sampleData.post);

    post.internalContent = "Content with [Markdown](/link).";

    const postData = generatePostData(post);

    expect(postData.body).toBe("Content with Markdown.");
  });

  it("falls back to post excerpt when no description is available", () => {
    expect.assertions(1);

    const post = cloneDeep(sampleData.post);
    post.description = undefined;

    const postData = generatePostData(post);

    expect(postData.description).toBe(post.excerpt);
  });

  it("falls back to None when no category is available", () => {
    expect.assertions(1);

    const post = cloneDeep(sampleData.post);
    post.category = undefined;

    const postData = generatePostData(post);

    expect(postData.category).toBe("None");
  });

  it("falls back to an empty list when no tags are available", () => {
    expect.assertions(1);

    const post = cloneDeep(sampleData.post);
    post.tags = undefined;

    const postData = generatePostData(post);

    expect(postData.tags).toStrictEqual([]);
  });

  it("throws error when internal content isn't available", () => {
    expect.assertions(1);

    const post = cloneDeep(sampleData.post);
    post.internalContent = undefined;

    const throwingFn = () => generatePostData(post);

    expect(throwingFn).toThrow(
      "SEO::generatePostData: Post doesn't contain internal content used for Rich Tags. Aborting."
    );
  });
});
