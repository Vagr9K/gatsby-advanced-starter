import React from "react";

import { SeoData, TwitterTagList } from "./types";
import { UserData, WebsiteData } from "../../config";

type SeoArgs = {
  seoData: SeoData;
  userData?: UserData;
  websiteData: WebsiteData;
};

const TwitterTags = ({
  seoData,
  userData,
  websiteData,
}: SeoArgs): TwitterTagList => {
  const { title, description, imageUrl, imageAlt } = seoData;
  const userTwitterName = userData?.twitterName;
  const siteTwitterName = websiteData.twitterName;

  const tagList: TwitterTagList = [];

  // This function acts as a type guard to prevent undefined content from being added
  const addTag = (name: string, content: string) => {
    tagList.push(<meta name={name} content={content} />);
  };

  addTag("twitter:card", "summary_large_image");
  addTag("twitter:title", title);

  if (description) addTag("twitter:description", description);

  if (imageUrl) addTag("twitter:image", imageUrl);

  addTag("twitter:image:alt", imageAlt);

  if (userTwitterName) addTag("twitter:creator", userTwitterName);

  if (siteTwitterName) addTag("twitter:site", siteTwitterName);

  return tagList.map((tag) => ({
    ...tag,
    key: tag.props.name,
  }));
};

export default TwitterTags;
