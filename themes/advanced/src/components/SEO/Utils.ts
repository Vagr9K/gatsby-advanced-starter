import removeMd from "remove-markdown";

import { SeoData, PostData } from "./types";
import { Post } from "../../types";
import { WebsiteData } from "../../config";

// Generate postData from a allMdx edge
export const generatePostData = (post: Post): PostData => {
  const {
    coverImageUrl,
    coverImageAlt,
    datePublished,
    dateModified,
    description,
    title,
    category,
    tags,
    internalContent,
    excerpt,
  } = post;

  if (!internalContent)
    throw Error(
      "SEO::generatePostData: Post doesn't contain internal content used for Rich Tags. Aborting."
    );

  const body = removeMd(internalContent);

  return {
    title,
    description: description || excerpt,
    coverImageUrl,
    coverImageAlt,
    datePublished,
    dateModified,
    category: category || "None",
    tags: tags || [],
    body,
    url: post.url,
  };
};

// Generate shared SEO metadata
export const generateSeoData = (
  websiteData: WebsiteData,
  postData?: PostData
): SeoData => {
  const isArticle = !!postData;
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
