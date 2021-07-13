import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import ConfigContext from "../../context/ConfigContext";
import useInfiniteFeed from "./useInfiniteFeed";

import { PageContext } from "./types";

export type FeedTemplateProps = {
  pageContext: PageContext;
};

const FeedTemplate = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  const config = useContext(ConfigContext);

  // Override the title for non-index feeds
  const getTitleOverride = () => {
    if (pageContext.feedType === "tag")
      return (
        <Helmet
          title={`Posts tagged as "${pageContext.feedId}" | ${config.website.title}`}
        />
      );

    if (pageContext.feedType === "category")
      return (
        <Helmet
          title={`Posts in category "${pageContext.feedId}" | ${config.website.title}`}
        />
      );

    return null;
  };

  return (
    <>
      <div className="feed-wrapper" ref={feedElementRef}>
        {getTitleOverride()}
        {feedListing.map((post) => (
          <pre>
            <code>{JSON.stringify(post, null, 2)}</code>
          </pre>
        ))}
      </div>
    </>
  );
};

export default FeedTemplate;
