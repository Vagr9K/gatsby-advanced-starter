import React from "react";
import {
  RichSearchTag,
  PostData,
  SeoData,
  JsonLdAuthorMetadata,
  JsonLdOrganizationMetadata,
  JsonLdArticleMetadata,
} from "./types";

import { UserData, OrganizationData } from "../../config";

export const getAuthorMetadata = (
  userData: UserData
): JsonLdAuthorMetadata => ({
  "@type": "Person",
  givenName: userData.firstName,
  familyName: userData.lastName,
  email: userData.email,
  address: userData.location,
});

export const generateOrganizationMetadata = (
  orgData: OrganizationData
): JsonLdOrganizationMetadata => {
  const { url, logoUrl, description, name } = orgData;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    url,
    name,
    description,
    logo: logoUrl,
  };
};

export const generateArticleMetadata = (
  postData: PostData,
  userData: UserData,
  orgData: OrganizationData
): JsonLdArticleMetadata | null => {
  const {
    title,
    description,
    coverImageUrl,
    datePublished,
    dateModified,
    category,
    tags,
    body,
    url,
  } = postData;

  const authorData = getAuthorMetadata(userData);
  const orgMetaData = generateOrganizationMetadata(orgData);

  if (!coverImageUrl || !description) return null;

  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    image: coverImageUrl,
    url,
    headline: title,
    name: title,
    description,
    dateCreated: datePublished,
    datePublished,
    dateModified,
    author: authorData,
    creator: authorData,
    publisher: orgMetaData,
    mainEntityOfPage: "True",
    keywords: tags,
    articleSection: category,
    articleBody: body,
  };
};

const RichSearchResultTags = (
  seoData: SeoData,
  postData: PostData | null,
  userData: UserData,
  orgData: OrganizationData
): RichSearchTag[] => {
  const { isArticle } = seoData;

  const jsonLdData =
    isArticle && postData
      ? generateArticleMetadata(postData, userData, orgData)
      : generateOrganizationMetadata(orgData);

  return jsonLdData
    ? [
        <script key="rich-search" type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>,
      ]
    : [];
};

export default RichSearchResultTags;
