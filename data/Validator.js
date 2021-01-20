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

  // Make sure siteUrl doesn't have an ending forward slash
  if (newConfig.siteUrl.substr(-1) === "/")
    newConfig.siteUrl = newConfig.siteUrl.slice(0, -1);

  // Make sure siteRss has a starting forward slash
  if (newConfig.siteRss && newConfig.siteRss[0] !== "/")
    newConfig.siteRss = `/${newConfig.siteRss}`;

  return newConfig;
};

module.exports = validateSiteConfig;
