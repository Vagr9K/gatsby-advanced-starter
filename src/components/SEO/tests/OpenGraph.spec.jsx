import OpenGraphTags from "../OpenGraph";
import {
  tagListHasEmptyValues,
  sampleData,
  tagListHasUniqueKeys,
} from "./TestUtils";

describe("seo module OpenGraphTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: null,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = OpenGraphTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: sampleData.post,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(3);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: null,
    });

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: sampleData.post,
    });

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);

    // Test for missing fbAppId case
    const generatedArticleTagsWithoutFbAppId = OpenGraphTags({
      seoData: sampleData.seoArticle,
      websiteData: { ...sampleData.website, fbAppId: null },
      userData: sampleData.user,
      postData: sampleData.post,
    });

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutFbAppId)).toBe(
      false
    );
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = OpenGraphTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: null,
    });

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = OpenGraphTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
      postData: sampleData.post,
    });

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
