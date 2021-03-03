import GeneralTags from "../General";
import { tagListHasEmptyValues, sampleData } from "./TestUtils";

describe("seo module GeneralTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = GeneralTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = GeneralTags({
      seoData: sampleData.seoWebsite,
      websiteData: sampleData.website,
    });

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = GeneralTags({
      seoData: sampleData.seoArticle,
      websiteData: sampleData.website,
    });

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);
  });
});
