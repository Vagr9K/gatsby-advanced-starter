import { isObject } from "lodash";
import React from "react";
import { UserData, WebsiteData, OrganizationData } from "../../../config";
import { SeoData, PostData } from "../types";

// Recursively scan for empty/null values
export const containsEmptyValues = (data: unknown): boolean => {
  if (Array.isArray(data)) {
    return !!data.find((item) => containsEmptyValues(item));
  }

  if (isObject(data)) {
    return containsEmptyValues(Object.values(data));
  }

  return !data;
};

// Check if the SEO taglist contains empty values
export const tagListHasEmptyValues = (tagList: React.ReactElement[]): boolean =>
  !!tagList.find((tag) => {
    if (containsEmptyValues(tag.type)) return true;

    if (containsEmptyValues(tag.props)) return true;

    return false;
  });

// Check if tag list has unique keys
export const tagListHasUniqueKeys = (
  tagList: React.ReactElement[]
): boolean => {
  const keys = tagList.map((tag) => tag.key);
  return new Set(keys).size === keys.length;
};

// Sample data used for testing SEO components
export const sampleSeoData: {
  post: PostData;
  seoArticle: SeoData;
  seoWebsite: SeoData;
  website: WebsiteData;
  user: UserData;
  organization: OrganizationData;
} = {
  // Generated post data
  post: {
    title: "Post title",
    description: "Post description.",
    coverImageUrl: "/logos/logo-1024.png",
    coverImageAlt: "Post cover image alt text.",
    datePublished: new Date("December 17, 2021 03:24:00"),
    dateModified: new Date("December 20, 2021 03:24:00"),
    category: "Tech",
    tags: ["Tag1", "Tag2"],
    body: "Post body",
    url: "/posts/url",
  },

  // Generated SEO date for an article page
  seoArticle: {
    isArticle: true,
    type: "article",
    title: "Post title",
    imageUrl: "/logos/logo-1024.png",
    imageAlt: "Post cover image alt text.",
    url: "/posts/url",
    description: "Post description.",
  },

  // Generated SEO data for a website
  seoWebsite: {
    isArticle: false,
    type: "website",
    title: "Website title",
    imageUrl: "/logos/logo-1024.png",
    imageAlt: "Website image alt description.",
    url: "/url",
    description: "Website description.",
  },

  // Website data
  website: {
    title: "Gatsby Advanced Starter", // Site title.
    titleShort: "GA Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Gatsby Advanced Starter", // Website name used for homescreen (PWA) and SEO
    description: "A GatsbyJS starter with Advanced design in mind.", // Website description used for RSS feeds/meta description tag
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO and manifest
    fbAppId: "1825356251115265", // FB Application ID for using app insights
    twitterName: "Vagr9K",
    url: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
  },

  // User data
  user: {
    id: "AdvancedUser",
    firstName: "First",
    lastName: "Last",
    twitterName: "Vagr9K", // Twitter username used for SEO and rendering the "Follow me button"
    email: "AdvancedUser@example.com", // Email used for RSS feed's author segment
    location: "User Location", // User location used for SEO and for the author segment.
    avatar: "https://api.adorable.io/avatars/150/test.png", // User avatar
  },

  // Organization data
  organization: {
    name: "Organization Name",
    description: "Organization description",
    logoUrl: "/logos/logo-512.png",
    url: "https://gatsby-advanced-starter-demo.netlify.com", // URL of the organization
  },
};

export default sampleSeoData;
