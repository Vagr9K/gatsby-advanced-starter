import React from "react";
import styled from "styled-components";

import { H2 } from "../../theme";
import FeedListing from "../FeedListing";
import { PostList } from "../../types";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 40px;

  justify-items: center;
`;

const Label = styled(H2)`
  text-transform: uppercase;
  color: var(--color-grey-700);

  &:after {
    content: "related posts";
  }
`;

type RelatedPostsProps = {
  list: PostList;
};

const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
  <Wrapper>
    <Label />
    <FeedListing noHero listing={list} />
  </Wrapper>
);

export default RelatedPosts;
