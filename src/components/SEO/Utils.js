import removeMd from "remove-markdown";
import urlJoin from "url-join";

// Generate a baseURL
export const getBaseUrl = (config) => {
  return urlJoin(config.website.url, config.pathPrefix);
};

// Generate postData from a allMdx edge
export const generatePostData = (postNode, baseUrl) => {
  const { excerpt, frontmatter, internal } = postNode;

  const {
    cover,
    coverAlt,
    datePublished,
    dateModified,
    description,
    title,
    category,
    tags,
  } = frontmatter;

  const body = removeMd(internal.content);

  return {
    title,
    description: description || excerpt,
    coverImageUrl: cover,
    coverImageAlt: coverAlt || title,
    datePublished,
    dateModified,
    category: category || "None",
    tags: tags || [],
    body,
    url: urlJoin(baseUrl, postNode.fields.slug),
  };
};

// Generate shared SEO metadata
export const generateSeoData = (websiteData, postData) => {
  const isArticle = !!postData;
  const title = isArticle ? postData.title : websiteData.title;
  const type = isArticle ? "article" : "website";
  const imageUrl = isArticle ? postData.coverImageUrl : websiteData.logoUrl;
  const imageAlt = isArticle ? postData.coverImageAlt : websiteData.description;
  const url = isArticle ? postData.url : websiteData.url;
  const description = isArticle
    ? postData.description
    : websiteData.description;

  return {
    isArticle,
    type,
    title,
    imageUrl,
    imageAlt,
    url,
    description,
  };
};
