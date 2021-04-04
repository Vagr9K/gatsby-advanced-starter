import React from "react";
import { Disqus as DisqusPlugin } from "gatsby-plugin-disqus";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

function Disqus({ postNode }) {
  if (!config.disqusShortname) {
    return null;
  }
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug);
  return (
    <DisqusPlugin
      config={{
        url,
        identifier: post.title,
        title: post.title,
      }}
    />
  );
}

export default Disqus;
