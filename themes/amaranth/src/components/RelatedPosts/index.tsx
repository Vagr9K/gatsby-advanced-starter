import React from "react";
import styled from "styled-components";

import { Types } from "gatsby-theme-advanced";

import { H2 } from "../../theme";
import FeedListing from "../FeedListing";

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
  list: Types.PostList;
};

const RelatedPosts = ({ list }: RelatedPostsProps): JSX.Element => (
  <Wrapper>
    <Label />
    <FeedListing noHero listing={list} />
  </Wrapper>
);

export default RelatedPosts;
