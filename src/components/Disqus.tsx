import React, { useContext } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import ConfigContext from "../context/ConfigContext";

type Props = {
  postTitle: string;
  postCategoryId?: number;
  postSlug: string;
};

const Disqus: React.FC<Props> = ({ postTitle, postCategoryId, postSlug }) => {
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
