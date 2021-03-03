import RichSearchTags, {
  getAuthorMetadata,
  generateOrganizationMetadata,
  generateArticleMetadata,
} from "../RichSearch";
import {
  tagListHasEmptyValues,
  sampleData,
  containsEmptyValues,
} from "./TestUtils";

describe("seo module RichSearchTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleData.seoWebsite,
      userData: sampleData.user,
      postData: null,
      orgData: sampleData.organization,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleData.seoArticle,
      userData: sampleData.user,
      postData: sampleData.post,
      orgData: sampleData.organization,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = RichSearchTags({
      seoData: sampleData.seoWebsite,
      userData: sampleData.user,
      postData: null,
      orgData: sampleData.organization,
    });

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = RichSearchTags({
      seoData: sampleData.seoArticle,
      userData: sampleData.user,
      postData: sampleData.post,
      orgData: sampleData.organization,
    });

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);
  });
});

describe("seo module RichSearchTags's utility getAuthorMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = getAuthorMetadata(sampleData.user);

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});

describe("seo module RichSearchTags's utility generateOrganizationMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = generateOrganizationMetadata(sampleData.organization);

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});

describe("seo module RichSearchTags's utility generateArticleMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = generateArticleMetadata(
      sampleData.post,
      sampleData.user,
      sampleData.organization
    );

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});
