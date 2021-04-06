import * as React from "react";
import { Link } from "gatsby";

type PostListingProps = {
  listing: PostListing;
};

export const PostListing = ({ listing }: PostListingProps): JSX.Element => (
  <div>
    {
      /* Your post list here. */
      listing.map((post) => (
        <Link to={post.slug} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))
    }
  </div>
);

export default PostListing;
