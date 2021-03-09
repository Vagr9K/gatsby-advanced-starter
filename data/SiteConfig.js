const config = {
  siteTitle: "Misty Business", // Site title.
  siteTitleShort: "Misty Business", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Ship's Log for Sea Mist, a timber ketch in Western Australia", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://misty.business", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Ship's Log for Sea Mist, a timber ketch in Western Australia", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Misty Business RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "G-LYLYPVV7G3", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 1024, // Amount of posts displayed per listing page.
  userName: "Adam Braimbridge", // Username to display in the author segment.
  userEmail: "adam@braimbridge.com", // Email used for RSS feed's author segment
  userTwitter: "@seamistress", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Fremantle, Western Australia", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I'm a real ketch if you can handle my salty buoyant personality", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/seamistress",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:adam@braimbridge.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#e0e0e0", // Used for setting manifest and progress theme colors.
  backgroundColor: "#000000", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
