import OpenGraphTags from "../OpenGraph";
import {
  tagListHasEmptyValues,
  sampleSeoData,
  tagListHasUniqueKeys,
} from "./TestUtils";

describe("seo module OpenGraphTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.website,
      sampleSeoData.user,
      null
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags(
      sampleSeoData.seoArticle,
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing description", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags(
      { ...sampleSeoData.seoArticle, description: undefined },
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate tags when missing SEO imageUrl", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags(
      { ...sampleSeoData.seoArticle, imageUrl: undefined },
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate tags when missing SEO imageAlt", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags(
      { ...sampleSeoData.seoArticle, imageAlt: undefined },
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(4);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.website,
      sampleSeoData.user,
      null
    );

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags(
      sampleSeoData.seoArticle,
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);

    // Test for missing fbAppId case
    const generatedArticleTagsWithoutFbAppId = OpenGraphTags(
      sampleSeoData.seoArticle,
      { ...sampleSeoData.website, fbAppId: undefined },
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutFbAppId)).toBe(
      false
    );

    // Test for missing description case
    const generatedArticleTagsWithoutDescription = OpenGraphTags(
      { ...sampleSeoData.seoArticle, description: undefined },
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutDescription)).toBe(
      false
    );
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.website,
      sampleSeoData.user,
      null
    );

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags(
      sampleSeoData.seoArticle,
      sampleSeoData.website,
      sampleSeoData.user,
      sampleSeoData.post
    );

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
