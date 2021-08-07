import * as React from "react";

export interface SeoData {
  isArticle: boolean;
  type: "website" | "article";
  title: string;
  imageUrl?: string;
  imageAlt: string;
  url: string;
  description?: string;
}

export interface PostData {
  title: string;
  description?: string;
  coverImageUrl?: string;
  coverImageAlt: string;
  datePublished: Date;
  dateModified: Date;
  category: string;
  tags: string[];
  body: string;
  url: string;
}

export type JsonLdAuthorMetadata = {
  "@type": "Person";
  givenName: string;
  familyName: string;
  email: string;
  address: string;
};

export type JsonLdOrganizationMetadata = {
  "@context": "https://schema.org";
  "@type": "Organization";
  url: string;
  name: string;
  description: string;
  logo: string;
};

export type JsonLdArticleMetadata = {
  "@context": "http://schema.org";
  "@type": "BlogPosting";
  mainEntityOfPage: "True";
  image: string;
  url: string;
  headline: string;
  name: string;
  description: string;
  dateCreated: Date;
  datePublished: Date;
  dateModified: Date;
  author?: JsonLdAuthorMetadata;
  creator?: JsonLdAuthorMetadata;
  publisher?: JsonLdOrganizationMetadata;
  keywords: Array<string>;
  articleSection: string;
  articleBody: string;
};

export type TwitterTagList = Array<
  React.ReactElement<{ name: string; content: string }, "meta">
>;

export type OpenGraphTagList = Array<
  React.ReactElement<{ property: string; content: string }, "meta">
>;

export type RichSearchTag = React.ReactElement<
  { key: "rich-search"; type: "application/ld+json" },
  "script"
>;
