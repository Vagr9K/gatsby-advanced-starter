import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import Layout from "../../layouts";
import PostListing from "../../components/PostListing";
import { jsonPostIntoPost, PostFromJsonList } from "../../types";
import ListingPageWrapper from "../../components/shared/ListingPageWrapper";
import ConfigContext from "../../context/ConfigContext";

type ListingProps = {
  pageContext: {
    limit: number;
    skip: number;
    pageCount: number;
    pageIndex: number;
    feedType: string;
    feedId: string;
    pagePosts: PostFromJsonList;
  };
};

const Listing = ({ pageContext }: ListingProps): JSX.Element => {
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
      <ListingPageWrapper>
        <PostListing
          listing={pageContext.pagePosts.map(jsonPostIntoPost)}
          noHero={noHero}
        />
      </ListingPageWrapper>
    </Layout>
  );
};

export default Listing;
