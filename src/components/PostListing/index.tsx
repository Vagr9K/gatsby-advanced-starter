import * as React from "react";
import styled from "styled-components";

import { PostList } from "../../types";
import ArticleCard from "../ArticleCard";
import { constants } from "../../theme";
import { LayoutWidthContainer } from "../shared/WidthContainer";

export const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${constants.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const WidthLimitedGrid = styled(LayoutWidthContainer)`
  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  justify-items: stretch;
`;

type PostListingProps = {
  listing: PostList;
  noHero?: boolean;
};

export const PostListing = ({
  listing,
  noHero,
}: PostListingProps): JSX.Element => (
  <WidthLimitedGrid>
    <Wrapper>
      {listing.map((post, idx) =>
        idx === 0 && !noHero ? (
          <ArticleCard key={post.slug} post={post} hero />
        ) : (
          <ArticleCard key={post.slug} post={post} />
        )
      )}
    </Wrapper>
  </WidthLimitedGrid>
);

export default PostListing;
