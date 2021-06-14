import React from "react";
import ReadButton from "./ArticleButton";
import ArticleInfo from "../ArticleInfo";
import { H3 } from "../../theme";
import { Post } from "../../types";

import * as S from "./styles";

type ArticleHeroCardProps = {
  post: Post;
  hero?: boolean;
};

const ArticleCard = ({ post, hero }: ArticleHeroCardProps): JSX.Element => (
  <S.Wrapper hero={hero}>
    <S.TransparentLink to={post.slug}>
      <S.Cover src={post.coverImageUrl} alt={post.coverImageAlt} rounded />
    </S.TransparentLink>
    <S.Details hero={hero}>
      <S.Meta>
        <S.Header>
          <ArticleInfo post={post} />
          <S.TransparentLink to={post.slug}>
            <H3>{post.title}</H3>
          </S.TransparentLink>
        </S.Header>
        <S.TransparentLink to={post.slug}>
          <S.Excerpt hero={hero}>{post.excerpt}</S.Excerpt>
        </S.TransparentLink>
      </S.Meta>
      {hero && <ReadButton to={post.slug} />}
    </S.Details>
  </S.Wrapper>
);

export default ArticleCard;
