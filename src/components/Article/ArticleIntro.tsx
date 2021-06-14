import React from "react";
import styled from "styled-components";

import { H1, Body } from "../../theme";
import ArticleInfo from "../ArticleInfo";
import ArticleImage from "./ArticleImage";
import { ArticleWidthContainer } from "../shared/WidthContainer";

import { Post } from "../../types";

const Wrapper = styled.section`
  width: 100%;

  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;

const Details = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const Cover = styled.div`
  width: 100%;

  display: grid;
  justify-items: center;
  grid-gap: 8px;
`;

const ArticleIntro = ({ post }: { post: Post }): JSX.Element => (
  <Wrapper>
    <ArticleWidthContainer>
      <Details>
        <H1>{post.title}</H1>
        <Body>{post.excerpt}</Body>
      </Details>
    </ArticleWidthContainer>
    <Cover>
      <ArticleWidthContainer>
        <ArticleInfo post={post} />
      </ArticleWidthContainer>
      <ArticleImage
        src={post.coverImageUrl}
        caption={post.coverImageAlt}
        noMargins
      />
    </Cover>
  </Wrapper>
);

export default ArticleIntro;
