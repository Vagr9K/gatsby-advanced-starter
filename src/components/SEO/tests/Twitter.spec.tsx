import TwitterTags from "../Twitter";
import {
  tagListHasEmptyValues,
  tagListHasUniqueKeys,
  sampleSeoData,
} from "./TestUtils";

describe("seo module TwitterTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = TwitterTags(
      sampleSeoData.seoArticle,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(4);

    // Test for website pages
    const websiteTags = TwitterTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(websiteTags)).toBe(false);

    // Test for article pages
    const articleTags = TwitterTags(
      sampleSeoData.seoArticle,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(articleTags)).toBe(false);

    // Test for missing userTwitterName
    const tagsWithoutUserTwitter = TwitterTags(
      sampleSeoData.seoArticle,
      { ...sampleSeoData.user, twitterName: undefined },
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(tagsWithoutUserTwitter)).toBe(false);

    // Test for missing siteTwitterName
    const tagsWithoutSiteTwitterName = TwitterTags(
      sampleSeoData.seoArticle,
      sampleSeoData.user,
      { ...sampleSeoData.website, twitterName: undefined }
    );

    expect(tagListHasEmptyValues(tagsWithoutSiteTwitterName)).toBe(false);
  });

  it("generates unique keys", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = TwitterTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(tagListHasUniqueKeys(generatedWebsiteTags)).toBe(true);

    // Test for article pages
    const generatedArticleTags = TwitterTags(
      sampleSeoData.seoArticle,
      sampleSeoData.user,
      sampleSeoData.website
    );

    expect(tagListHasUniqueKeys(generatedArticleTags)).toBe(true);
  });
});
