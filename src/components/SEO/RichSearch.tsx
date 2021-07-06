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
  orgData?: OrganizationData,
  userData?: UserData
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

  const orgMetaData = orgData
    ? generateOrganizationMetadata(orgData)
    : undefined;
  const authorData = userData ? getAuthorMetadata(userData) : undefined;

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

type SeoArgs = {
  seoData: SeoData;
  postData?: PostData;
  userData?: UserData;
  orgData?: OrganizationData;
};

const RichSearchResultTags = ({
  seoData,
  postData,
  userData,
  orgData,
}: SeoArgs): RichSearchTag[] => {
  const { isArticle } = seoData;

  const articleJsonLd =
    isArticle && postData
      ? generateArticleMetadata(postData, orgData, userData)
      : undefined;

  const orgJsonLd = orgData ? generateOrganizationMetadata(orgData) : undefined;

  const jsonLdData = isArticle ? articleJsonLd : orgJsonLd;

  return jsonLdData
    ? [
        <script key="rich-search" type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>,
      ]
    : [];
};

export default RichSearchResultTags;
