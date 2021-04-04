import removeMd from "remove-markdown";

import { SeoData, PostData } from "./interfaces";
import { WebsiteData } from "../../../config";

// Generate postData from a allMdx edge
export const generatePostData = (postNode: Post): PostData => {
  const {
    coverImageUrl,
    coverImageAlt,
    datePublished,
    dateModified,
    description,
    title,
    category,
    tags,
    url,
    internalContent,
    excerpt,
  } = postNode;

  if (!internalContent)
    throw Error(
      "SEO::generatePostData: Post doesn't contain internal content used for Rich Tags. Aborting."
    );

  const body = removeMd(internalContent);

  return {
    title,
    description: description || excerpt,
    coverImageUrl,
    coverImageAlt: coverImageAlt || title,
    datePublished,
    dateModified,
    category: category || "None",
    tags: tags || [],
    body,
    url,
  };
};

// Generate shared SEO metadata
export const generateSeoData = (
  websiteData: WebsiteData,
  postData: PostData | null
): SeoData => {
  const isArticle = postData !== null;
  const title = postData ? postData.title : websiteData.title;
  const type = postData ? "article" : "website";
  const imageUrl = postData ? postData.coverImageUrl : websiteData.logoUrl;
  const imageAlt = postData ? postData.coverImageAlt : websiteData.description;
  const url = postData ? postData.url : websiteData.url;
  const description = postData ? postData.description : websiteData.description;

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
