import React from "react";

export const getAuthorMetadata = (userData) => {
  const authorMetadata = {
    "@type": "Person",
    givenName: userData.firstName,
    familyName: userData.lastName,
    email: userData.email,
    address: userData.location,
  };

  return authorMetadata;
};

export const generateOrganizationMetadata = (orgData) => {
  const { url, logoUrl, description, name } = orgData;

  const orgMetadata = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url,
    name,
    description,
    logo: logoUrl,
  };

  return orgMetadata;
};

export const generateArticleMetadata = (postData, userData, orgData) => {
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

  const articleMetadata = {
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

  return articleMetadata;
};

const RichSearchResultTags = ({ seoData, postData, userData, orgData }) => {
  const { isArticle } = seoData;

  const jsonLdData = isArticle
    ? generateArticleMetadata(postData, userData, orgData)
    : generateOrganizationMetadata(orgData);

  return [
    <script key="rich-search" type="application/ld+json">
      {JSON.stringify(jsonLdData)}
    </script>,
  ];
};

export default RichSearchResultTags;
