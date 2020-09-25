import React, { useState } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

function Disqus({ postNode }) {
  const [toasts, setToasts] = useState([]);

  function notifyAboutComment() {
    const newToasts = toasts.slice();
    newToasts.push({ text: "New comment available!" });
    setToasts(newToasts);
  }

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
      onNewComment={notifyAboutComment}
    />
  );
}

export default Disqus;
