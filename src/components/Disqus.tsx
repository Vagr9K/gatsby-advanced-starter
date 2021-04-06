import React, { useContext } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import ConfigContext from "../context/ConfigContext";

type DisqusProps = {
  postTitle: string;
  postCategoryId?: number;
  postSlug: string;
};

const Disqus = ({
  postTitle,
  postCategoryId,
  postSlug,
}: DisqusProps): JSX.Element | null => {
  const config = useContext(ConfigContext);

  // Do not render if no shortname was provided
  if (!config.disqusShortname) {
    return null;
  }

  const url = urljoin(config.website.url, config.pathPrefix, postSlug);
  return (
    <ReactDisqusComments
      shortname={config.disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url}
      category_id={postCategoryId ? postCategoryId.toString() : undefined}
    />
  );
};

export default Disqus;
