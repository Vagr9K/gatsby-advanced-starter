import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import Layout from "../../layouts";
import PostListing from "../../components/PostListing";
import ListingPageWrapper from "../../components/shared/ListingPageWrapper";
import ConfigContext from "../../context/ConfigContext";

import useInfiniteFeed from "./useInfiniteFeed";

import { PageContext } from "./types";

type FeedProps = {
  pageContext: PageContext;
};

const Feed = ({ pageContext }: FeedProps): JSX.Element => {
  const { postList, feedElementRef } = useInfiniteFeed(pageContext);

  const config = useContext(ConfigContext);

  // Don't show hero images on non-index feeds
  const noHero = pageContext.feedType !== "index";

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
    <Layout>
      {getTitleOverride()}
      <ListingPageWrapper ref={feedElementRef}>
        <PostListing listing={postList} noHero={noHero} />
      </ListingPageWrapper>
    </Layout>
  );
};

export default Feed;
