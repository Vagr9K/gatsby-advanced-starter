import * as React from "react";

import { Link, Types } from "gatsby-theme-advanced";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

import "./styles.css";

type PostListingProps = {
  listing: Types.FeedList;
};

const FeedListing = ({ listing }: PostListingProps): JSX.Element => (
  <div className="listing-wrapper">
    {listing.map((feedItem) => {
      // Check if we're rendering a placeholder
      if ("isPlaceholder" in feedItem)
        return <h1 key={feedItem.key}>Loading...</h1>;

      const { coverImg } = feedItem;
      if (!coverImg)
        throw Error("Article: Failed to render Article without cover image.");

      const gatsbyImage = getImage(coverImg);

      if (!gatsbyImage)
        throw Error(
          "Article: Failed to get Gatsby image data from the cover image."
        );

      return (
        <React.Fragment key={`${feedItem.slug}`}>
          <Link to={feedItem.route}>
            <h1> {feedItem.title}</h1>
            <GatsbyImage image={gatsbyImage} alt={feedItem.coverImageAlt} />
          </Link>
          <p>{feedItem.excerpt}</p>
        </React.Fragment>
      );
    })}
  </div>
);

export default FeedListing;
