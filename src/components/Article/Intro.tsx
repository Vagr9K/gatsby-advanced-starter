import React from "react";
import styled from "styled-components";

import { H1, Body } from "../../theme";
import ArticleInfo from "../ArticleInfo";
import Image from "./Image";
import { WidthWrapper } from "./Spacing";

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
    <WidthWrapper>
      <Details>
        <H1>{post.title}</H1>
        <Body>{post.excerpt}</Body>
      </Details>
    </WidthWrapper>
    <Cover>
      <WidthWrapper>
        <ArticleInfo post={post} />
      </WidthWrapper>
      <Image src={post.coverImageUrl} caption={post.coverImageAlt} cover />
    </Cover>
  </Wrapper>
);

export default ArticleIntro;
