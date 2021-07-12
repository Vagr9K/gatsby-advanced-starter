import * as React from "react";

import Link from "gatsby-theme-advanced/src/components/Link";
import { FeedList } from "gatsby-theme-advanced/src/types";

import "./styles.css";

type PostListingProps = {
  listing: FeedList;
};

const FeedListing = ({ listing }: PostListingProps): JSX.Element => (
  <div className="listing-wrapper">
    {listing.map((feedItem) => {
      // Check if we're rendering a placeholder
      if ("isPlaceholder" in feedItem)
        return <h1 key={feedItem.key}>Loading...</h1>;

      return (
        <Link to={feedItem.route} key={feedItem.slug}>
          <h1> {feedItem.title}</h1>
        </Link>
      );
    })}
  </div>
);

export default FeedListing;
