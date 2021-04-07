import RichSearchTags, {
  getAuthorMetadata,
  generateOrganizationMetadata,
  generateArticleMetadata,
} from "../RichSearch";
import {
  tagListHasEmptyValues,
  sampleSeoData,
  containsEmptyValues,
} from "./TestUtils";

describe("seo module RichSearchTags", () => {
  it("generates correct tags on website pages", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags(
      sampleSeoData.seoWebsite,
      null,
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags(
      sampleSeoData.seoArticle,
      sampleSeoData.post,
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate tags when missing post coverImageUrl", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags(
      sampleSeoData.seoArticle,
      { ...sampleSeoData.post, coverImageUrl: undefined },
      sampleSeoData.user,
      sampleSeoData.organization
    );
    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate tags when missing post description", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags(
      sampleSeoData.seoArticle,
      { ...sampleSeoData.post, description: undefined },
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(2);

    // Test for website pages
    const generatedWebsiteTags = RichSearchTags(
      sampleSeoData.seoWebsite,
      null,
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = RichSearchTags(
      sampleSeoData.seoArticle,
      sampleSeoData.post,
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);
  });
});

describe("seo module RichSearchTags's utility getAuthorMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = getAuthorMetadata(sampleSeoData.user);

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});

describe("seo module RichSearchTags's utility generateOrganizationMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = generateOrganizationMetadata(
      sampleSeoData.organization
    );

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});

describe("seo module RichSearchTags's utility generateArticleMetadata", () => {
  it("generates valid JSONLD", () => {
    expect.assertions(2);

    const generatedTags = generateArticleMetadata(
      sampleSeoData.post,
      sampleSeoData.user,
      sampleSeoData.organization
    );

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});
