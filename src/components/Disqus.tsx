import React, { useContext } from "react";
import { Disqus as DisqusPlugin } from "gatsby-plugin-disqus";
import urljoin from "url-join";
import ConfigContext from "../context/ConfigContext";

type DisqusProps = {
  postTitle: string;
  postSlug: string;
};

const Disqus = ({ postTitle, postSlug }: DisqusProps): JSX.Element | null => {
  const config = useContext(ConfigContext);

  // Do not render if no shortname was provided
  if (!config.disqusShortname) {
    return null;
  }

  const url = urljoin(config.website.url, config.pathPrefix, postSlug);
  return (
    <DisqusPlugin
      config={{
        url,
        identifier: postTitle,
        title: postTitle,
      }}
    />
  );
};

export default Disqus;
