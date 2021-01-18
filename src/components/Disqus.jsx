import React, { useContext } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import ConfigContext from "../context/ConfigContext";

function Disqus({ postNode }) {
  const config = useContext(ConfigContext);

  if (!config.disqusShortname) {
    return null;
  }
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug);
  return (
    <ReactDisqusComments
      shortname={config.disqusShortname}
      identifier={post.title}
      title={post.title}
      url={url}
      category_id={post.category_id || null}
    />
  );
}

export default Disqus;
