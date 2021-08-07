import OpenGraphTags from "../OpenGraph";
import {
  tagListHasEmptyValues,
  sampleSeoData,
  tagListHasUniqueKeys,
} from "./TestUtils";

describe("seo module OpenGraphTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: sampleSeoData.seoWebsite,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing description", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: { ...sampleSeoData.seoArticle, description: undefined },
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing UserData", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: sampleSeoData.website,
      userData: undefined,
      postData: sampleSeoData.post,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate tags when missing SEO imageUrl", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: { ...sampleSeoData.seoArticle, imageUrl: undefined },
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(5);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags({
      seoData: sampleSeoData.seoWebsite,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
    });

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);

    // Test for missing fbAppId case
    const generatedArticleTagsWithoutFbAppId = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: { ...sampleSeoData.website, fbAppId: undefined },
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutFbAppId)).toBe(
      false
    );

    // Test for missing description case
    const generatedArticleTagsWithoutDescription = OpenGraphTags({
      seoData: { ...sampleSeoData.seoArticle, description: undefined },
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutDescription)).toBe(
      false
    );

    // Test for missing UserData case
    const generatedTagsWithoutUserData = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: sampleSeoData.website,
      userData: undefined,
      postData: sampleSeoData.post,
    });

    expect(tagListHasEmptyValues(generatedTagsWithoutUserData)).toBe(false);
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags({
      seoData: sampleSeoData.seoWebsite,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
    });

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags({
      seoData: sampleSeoData.seoArticle,
      websiteData: sampleSeoData.website,
      userData: sampleSeoData.user,
      postData: sampleSeoData.post,
    });

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
