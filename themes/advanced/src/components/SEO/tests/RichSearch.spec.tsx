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

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoWebsite,
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags on article pages", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate tags when missing post coverImageUrl", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: { ...sampleSeoData.post, coverImageUrl: undefined },
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });
    expect(generatedTags).toStrictEqual([]);
  });

  it("doesn't generate tags when missing post description", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: { ...sampleSeoData.post, description: undefined },
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });

    expect(generatedTags).toStrictEqual([]);
  });

  it("generates correct tags when missing UserData", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: undefined,
      orgData: sampleSeoData.organization,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("generates correct tags when missing OrgData", () => {
    expect.assertions(1);

    const generatedTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: sampleSeoData.user,
      orgData: undefined,
    });

    expect(generatedTags).toMatchSnapshot();
  });

  it("doesn't generate empty tags", () => {
    expect.assertions(4);

    // Test for website pages
    const generatedWebsiteTags = RichSearchTags({
      seoData: sampleSeoData.seoWebsite,
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });

    expect(tagListHasEmptyValues(generatedWebsiteTags)).toBe(false);

    // Test for article pages
    const generatedArticleTags = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: sampleSeoData.user,
      orgData: sampleSeoData.organization,
    });

    expect(tagListHasEmptyValues(generatedArticleTags)).toBe(false);

    // Test for missing UserData
    const generatedArticleTagsWithoutUserData = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: undefined,
      orgData: sampleSeoData.organization,
    });

    expect(tagListHasEmptyValues(generatedArticleTagsWithoutUserData)).toBe(
      false
    );

    // Test for missing OrgData
    const generatedTagsWithoutOrgData = RichSearchTags({
      seoData: sampleSeoData.seoArticle,
      postData: sampleSeoData.post,
      userData: sampleSeoData.user,
      orgData: undefined,
    });

    expect(tagListHasEmptyValues(generatedTagsWithoutOrgData)).toBe(false);
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
      sampleSeoData.organization,
      sampleSeoData.user
    );

    expect(containsEmptyValues(generatedTags)).toBe(false);

    expect(() => JSON.stringify(generatedTags)).not.toThrow(Error);
  });
});
