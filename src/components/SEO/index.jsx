import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import ConfigContext from "../../context/ConfigContext";
import GeneralTags from "./General";
import OpenGraphTags from "./OpenGraph";
import RichSearchResultTags from "./RichSearch";
import TwitterTags from "./Twitter";
import { generatePostData, generateSeoData, getBaseUrl } from "./Utils";

function SEO({ postNode }) {
  const config = useContext(ConfigContext);

  const baseUrl = getBaseUrl(config);

  const postData = postNode ? generatePostData(postNode, baseUrl) : null;
  const seoData = generateSeoData(config.website, postData);

  const websiteData = config.website;
  const userData = config.user;
  const orgData = config.organization;

  const tagList = [
    ...GeneralTags({ seoData, websiteData: config.website }),
    ...OpenGraphTags({
      seoData,
      websiteData,
      userData,
      postData,
    }),
    ...RichSearchResultTags({ seoData, postData, userData, orgData }),
    ...TwitterTags({ seoData, userData, websiteData }),
  ];

  return <Helmet>{tagList}</Helmet>;
}

export default SEO;
