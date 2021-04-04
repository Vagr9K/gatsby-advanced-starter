const validateSiteConfig = require("./Validator");
const userConfig = require("../data/SiteConfig.js");

module.exports = validateSiteConfig(userConfig);
