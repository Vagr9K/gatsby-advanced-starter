import React from "react";
import styled from "styled-components";
import { Post } from "../../types";

import ArticleIntro from "./ArticleIntro";
import ArticleRender from "./ArticleRender";
import ArticleShare from "./ArticleShare";

const Wrapper = styled.article`
  width: 100%;

  display: grid;
  grid-gap: 24px;
  justify-items: center;
`;

type ArticleProps = {
  post: Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => (
  <Wrapper>
    <ArticleIntro post={post} />
    <ArticleRender post={post} />
    <ArticleShare post={post} />
  </Wrapper>
);

export default Article;
