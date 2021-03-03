import removeMd from "remove-markdown";
import { generatePostData, generateSeoData, getBaseUrl } from "../Utils";
import { sampleData } from "./TestUtils";

import config from "../../../../data/SiteConfig";

describe("seo utility getBaseUrl", () => {
  it("correctly generates website baseUrl", () => {
    expect.assertions(1);

    const baseUrl = getBaseUrl(config);
    const expectedUrl = config.website.url + config.pathPrefix;

    expect(baseUrl).toBe(expectedUrl);
  });
});

describe("seo utility generateSeoData", () => {
  it("correctly generates website SEO metadata", () => {
    expect.assertions(7);

    const websiteData = sampleData.website;

    const seoData = generateSeoData(websiteData, null);

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

    const postData = sampleData.post;

    const seoData = generateSeoData(sampleData.website, postData);

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
    expect.assertions(10);

    const { postNode } = sampleData;
    const { frontmatter, fields } = postNode;

    const postData = generatePostData(postNode, "/");

    expect(postData.body).toBe(removeMd(postNode.internal.content));
    expect(postData.category).toBe(frontmatter.category);
    expect(postData.coverImageUrl).toBe(frontmatter.cover);
    expect(postData.coverImageAlt).toBe(frontmatter.coverAlt);
    expect(postData.datePublished).toBe(frontmatter.datePublished);
    expect(postData.dateModified).toBe(frontmatter.dateModified);
    expect(postData.description).toBe(frontmatter.description);
    expect(postData.tags).toBe(frontmatter.tags);
    expect(postData.title).toBe(frontmatter.title);
    expect(postData.url).toBe(fields.slug);
  });

  it("correctly strips markdown formatting from the article content", () => {
    expect.assertions(1);

    const { postNode } = sampleData;
    postNode.internal.content = "Content with [Markdown](/link).";

    const postData = generatePostData(postNode, "/");

    expect(postData.body).toBe("Content with Markdown.");
  });

  it("falls back to post excerpt when no description is available", () => {
    expect.assertions(1);

    const postNode = { ...sampleData.postNode };
    postNode.frontmatter.description = null;

    const postData = generatePostData(postNode, "/");

    expect(postData.description).toBe(postNode.excerpt);
  });

  it("falls back to post title when no cover alt is available", () => {
    expect.assertions(1);

    const postNode = { ...sampleData.postNode };
    postNode.frontmatter.coverAlt = null;

    const postData = generatePostData(postNode, "/");

    expect(postData.coverImageAlt).toBe(postNode.frontmatter.title);
  });

  it("falls back to None when no category is available", () => {
    expect.assertions(1);

    const postNode = { ...sampleData.postNode };
    postNode.frontmatter.category = null;

    const postData = generatePostData(postNode, "/");

    expect(postData.category).toBe("None");
  });

  it("falls back to an empty list when no tags are available", () => {
    expect.assertions(1);

    const postNode = { ...sampleData.postNode };
    postNode.frontmatter.tags = null;

    const postData = generatePostData(postNode, "/");

    expect(postData.tags).toStrictEqual([]);
  });
});
