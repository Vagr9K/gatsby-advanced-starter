import TwitterTags from "../Twitter";
import {
  tagListHasEmptyValues,
  tagListHasUniqueKeys,
  sampleSeoData,
} from "./TestUtils";

describe("seo module TwitterTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: sampleSeoData.seoWebsite,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: sampleSeoData.seoArticle,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing description", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: { ...sampleSeoData.seoArticle, description: undefined },
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing imageUrl", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags({
      seoData: { ...sampleSeoData.seoArticle, imageUrl: undefined },
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(6);

    // Test for website pages
    const websiteTags = TwitterTags({
      seoData: sampleSeoData.seoWebsite,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasEmptyValues(websiteTags)).toBe(false);

    // Test for article pages
    const articleTags = TwitterTags({
      seoData: sampleSeoData.seoArticle,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasEmptyValues(articleTags)).toBe(false);

    // Test for missing userTwitterName
    const tagsWithoutUserTwitter = TwitterTags({
      seoData: sampleSeoData.seoArticle,
      userData: { ...sampleSeoData.user, twitterName: undefined },
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasEmptyValues(tagsWithoutUserTwitter)).toBe(false);

    // Test for missing siteTwitterName
    const tagsWithoutSiteTwitterName = TwitterTags({
      seoData: sampleSeoData.seoArticle,
      userData: sampleSeoData.user,
      websiteData: { ...sampleSeoData.website, twitterName: undefined },
    });

    expect(tagListHasEmptyValues(tagsWithoutSiteTwitterName)).toBe(false);

    // Test for missing description
    const tagsWithoutDescription = TwitterTags({
      seoData: { ...sampleSeoData.seoArticle, description: undefined },
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasEmptyValues(tagsWithoutDescription)).toBe(false);

    // Test for missing imageUrl
    const tagsWithoutImageUrl = TwitterTags({
      seoData: { ...sampleSeoData.seoArticle, imageUrl: undefined },
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasEmptyValues(tagsWithoutImageUrl)).toBe(false);
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = TwitterTags({
      seoData: sampleSeoData.seoWebsite,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = TwitterTags({
      seoData: sampleSeoData.seoArticle,
      userData: sampleSeoData.user,
      websiteData: sampleSeoData.website,
    });

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
