import React from "react";
import styled from "styled-components";

import { Types } from "gatsby-theme-advanced";

import Intro from "../../../../themes/amaranth/src/components/Article/Intro";
import Render from "../../../../themes/amaranth/src/components/Article/Render";
import Share from "../../../../themes/amaranth/src/components/Article/Share";

const Wrapper = styled.main`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
`;

type ArticleProps = {
  post: Types.Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => (
  <Wrapper>
    <Intro post={post} />
    <Render post={post} />
    <Share post={post} />
  </Wrapper>
);

export default Article;
