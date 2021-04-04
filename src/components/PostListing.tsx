import * as React from "react";
import { Link } from "gatsby";

interface Props {
  listing: PostListing;
}

export const PostListing: React.FC<Props> = ({ listing }) => (
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
