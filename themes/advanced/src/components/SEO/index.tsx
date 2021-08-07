import * as React from "react";
import { Helmet } from "react-helmet";

import { Post } from "../../types";

import GeneralTags from "./General";
import OpenGraphTags from "./OpenGraph";
import RichSearchTags from "./RichSearch";
import TwitterTags from "./Twitter";
import { generatePostData, generateSeoData } from "./Utils";
import { useConfig } from "../../config";

type SeoProps = {
  post?: Post;
};

const SEO = ({ post }: SeoProps): JSX.Element => {
  const config = useConfig();

  const postData = post ? generatePostData(post) : undefined;
  const seoData = generateSeoData(config.website, postData);

  const websiteData = config.website;
  const userData = config.user;
  const orgData = config.organization;

  const tagList = [
    ...GeneralTags(seoData, config.website),
    ...OpenGraphTags({ seoData, websiteData, userData, postData }),
    ...RichSearchTags({ seoData, postData, userData, orgData }),
    ...TwitterTags({ seoData, userData, websiteData }),
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: websiteData.language,
      }}
    >
      {tagList}
    </Helmet>
  );
};

export default SEO;
