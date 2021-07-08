import GeneralTags from "../General";
import { tagListHasEmptyValues, sampleSeoData } from "./TestUtils";

describe("seo module GeneralTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags(
      sampleSeoData.seoArticle,
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing description", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags(
      { ...sampleSeoData.seoArticle, description: undefined },
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing imageUrl", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags(
      { ...sampleSeoData.seoArticle, imageUrl: undefined },
      sampleSeoData.website
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(4);

    // Test for website pages
    const generatedWebsiteTags = GeneralTags(
      sampleSeoData.seoWebsite,
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = GeneralTags(
      sampleSeoData.seoArticle,
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);

    // Test for missing description
    const generatedArticleTagsWithMissingDesc = GeneralTags(
      { ...sampleSeoData.seoArticle, description: undefined },
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(generatedArticleTagsWithMissingDesc)).toBe(
      false
    );

    // Test for missing imageUrl
    const generatedArticleTagsWithMissingImage = GeneralTags(
      { ...sampleSeoData.seoArticle, imageUrl: undefined },
      sampleSeoData.website
    );

    expect(tagListHasEmptyValues(generatedArticleTagsWithMissingImage)).toBe(
      false
    );
  });
});
