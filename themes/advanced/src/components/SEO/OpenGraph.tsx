import React from "react";

import { PostData, SeoData, OpenGraphTagList } from "./types";
import { UserData, WebsiteData } from "../../config";

// This function acts as a type guard to prevent undefined content from being added
const addTag = (
  tagList: OpenGraphTagList,
  property: string,
  content: string
) => {
  tagList.push(<meta property={property} content={content} />);
};

const createArticleTagList = (
  postData: PostData,
  userData?: UserData
): OpenGraphTagList => {
  const metaTags: OpenGraphTagList = [];

  addTag(
    metaTags,
    "article:published_time",
    postData.datePublished.toISOString()
  );
  addTag(
    metaTags,
    "article:modified_time",
    postData.dateModified.toISOString()
  );
  addTag(
    metaTags,
    "article:author",
    "http://examples.opengraphprotocol.us/profile.html"
  );

  if (userData) {
    addTag(metaTags, "profile:first_name", userData.firstName);
    addTag(metaTags, "profile:last_name", userData.lastName);
    addTag(metaTags, "profile:username", userData.id);
  }

  addTag(metaTags, "article:section", postData.category);

  postData.tags.forEach((tag) => {
    addTag(metaTags, "article:tag", tag);
  });

  return metaTags;
};

type SeoArgs = {
  seoData: SeoData;
  websiteData: WebsiteData;
  userData?: UserData;
  postData?: PostData;
};

const OpenGraphTags = ({
  seoData,
  websiteData,
  userData,
  postData,
}: SeoArgs): OpenGraphTagList => {
  const { isArticle, type, title, imageUrl, imageAlt, url, description } =
    seoData;

  const siteName = websiteData.name;

  if (!imageUrl || !imageAlt) return [];

  const metaTags: OpenGraphTagList = [];

  addTag(metaTags, "og:title", title);
  addTag(metaTags, "og:type", type);
  addTag(metaTags, "og:url", url);
  addTag(metaTags, "og:image", imageUrl);
  addTag(metaTags, "og:image:alt", imageAlt);
  addTag(metaTags, "og:site_name", siteName);

  if (description) addTag(metaTags, "og:description", description);

  if (websiteData.fbAppId) addTag(metaTags, "fb:app_id", websiteData.fbAppId);

  if (isArticle && postData)
    metaTags.push(...createArticleTagList(postData, userData));

  // Add unique keys and return
  return metaTags.map((tag) => ({
    ...tag,
    key: `${tag.props.property}-${tag.props.content}`,
  }));
};

export default OpenGraphTags;
