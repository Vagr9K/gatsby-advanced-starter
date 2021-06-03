import * as React from "react";
import { PostList } from "../../types";
import ArticleCard from "../ArticleCard";
import { PostListingContainer } from "./style";

type PostListingProps = {
  listing: PostList;
};

export const PostListing = ({ listing }: PostListingProps): JSX.Element => (
  <PostListingContainer>
    {listing.map((post, idx) =>
      idx === 0 ? <ArticleCard post={post} hero /> : <ArticleCard post={post} />
    )}
  </PostListingContainer>
);

export default PostListing;
