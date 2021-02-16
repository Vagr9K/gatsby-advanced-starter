// Validate
const validateSiteConfig = (config) => {
  const newConfig = config;
  // Make sure pathPrefix is empty if not needed
  if (newConfig.pathPrefix === "/") {
    newConfig.pathPrefix = "";
  } else {
    // Make sure pathPrefix only contains the first forward slash
    newConfig.pathPrefix = `/${newConfig.pathPrefix.replace(/^\/|\/$/g, "")}`;
  }

  // Make sure website.url doesn't have an ending forward slash
  if (newConfig.website.url.substr(-1) === "/")
    newConfig.website.url = newConfig.website.url.slice(0, -1);

  // Make sure website.rss has a starting forward slash
  if (newConfig.website.rss && newConfig.website.rss[0] !== "/")
    newConfig.website.rss = `/${newConfig.website.rss}`;

  return newConfig;
};

module.exports = validateSiteConfig;
