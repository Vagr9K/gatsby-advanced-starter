import TwitterTags from "../Twitter";
import {
  tagListHasEmptyValues,
  tagListHasUniqueKeys,
  sampleData,
} from "./TestUtils";

describe("seo module TwitterTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(4);

    // Test for website pages
    const websiteTags = TwitterTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(tagListHasEmptyValues(websiteTags)).toBe(false);

    // Test for article pages
    const articleTags = TwitterTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(tagListHasEmptyValues(articleTags)).toBe(false);

    // Test for missing userTwitterName
    const tagsWithoutUserTwitter = TwitterTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: { ...sampleData.user, twitterName: null },
    });

    expect(tagListHasEmptyValues(tagsWithoutUserTwitter)).toBe(false);

    // Test for missing siteTwitterName
    const tagsWithoutSiteTwitterName = TwitterTags({
      seoData: sampleData.seoArticle,
      websiteData: { ...sampleData.website, twitterName: null },
      userData: sampleData.user,
    });

    expect(tagListHasEmptyValues(tagsWithoutSiteTwitterName)).toBe(false);
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = TwitterTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = TwitterTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
      userData: sampleData.user,
    });

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
