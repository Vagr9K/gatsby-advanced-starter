import * as React from "react";
import { Helmet } from "react-helmet";

import ConfigContext from "../../context/ConfigContext";
import GeneralTags from "./General";
import OpenGraphTags from "./OpenGraph";
import RichSearchTags from "./RichSearch";
import TwitterTags from "./Twitter";
import { generatePostData, generateSeoData } from "./Utils";

interface SeoProps {
  post?: Post;
}

const SEO: React.FC<SeoProps> = ({ post }) => {
  const config = React.useContext(ConfigContext);

  const postData = post ? generatePostData(post) : null;
  const seoData = generateSeoData(config.website, postData);

  const websiteData = config.website;
  const userData = config.user;
  const orgData = config.organization;

  const tagList = [
    ...GeneralTags(seoData, config.website),
    ...OpenGraphTags(seoData, websiteData, userData, postData),
    ...RichSearchTags(seoData, postData, userData, orgData),
    ...TwitterTags(seoData, userData, websiteData),
  ];

  return <Helmet>{tagList}</Helmet>;
};

export default SEO;