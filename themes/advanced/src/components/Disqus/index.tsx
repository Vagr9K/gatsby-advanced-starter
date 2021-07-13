import React, { useContext } from "react";
import { Disqus as DisqusPlugin } from "gatsby-plugin-disqus";

import ConfigContext from "../../context/ConfigContext";

import { Post } from "../../types";

type DisqusProps = {
  post: Post;
};

const Disqus = ({ post }: DisqusProps): JSX.Element | null => {
  const config = useContext(ConfigContext);

  // Do not render if no shortname was provided
  if (!config.website.disqusShortname) {
    return null;
  }

  const { url, title } = post;

  return (
    <DisqusPlugin
      config={{
        url,
        identifier: title,
        title,
      }}
    />
  );
};

export default Disqus;
