import { SiteConfig } from "../src/config/types";

const config: SiteConfig = {
  // Website configuration
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

  // User configuration
  user: {
    id: "AdvancedUser",
    firstName: "First",
    lastName: "Last",
    twitterName: "Vagr9K", // Twitter username used for SEO and rendering the "Follow me button"
    linkedIn: "your-linkedin",
    github: "vagr9k",
    email: "AdvancedUser@example.com", // Email used for RSS feed's author segment
    location: "User Location", // User location used for SEO and for the author segment.
    avatar: "https://api.adorable.io/avatars/150/test.png", // User avatar
  },

  // Organization information used for SEO
  organization: {
    name: "Organization Name",
    description: "Organization description",
    logoUrl: "/logos/logo-512.png",
    url: "https://gatsby-advanced-starter-demo.netlify.com", // URL of the organization
  },

  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  copyright: "© Copyright 2021 | Ruben Harutyunyan", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

export default config;
