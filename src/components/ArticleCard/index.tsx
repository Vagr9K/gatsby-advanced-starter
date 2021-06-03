import React from "react";
import ReadButton from "./ArticleButton";
import ArticleInfo from "../ArticleInfo";
import { H3 } from "../../theme";
import { Post } from "../../types";

import {
  CardContainer,
  ArticleLink,
  Details,
  ArticleMeta,
  ArticleHeader,
  ArticleExcerpt,
  CardImage,
} from "./style";

type ArticleHeroCardProps = {
  post: Post;
  hero?: boolean;
};

const ArticleCard = ({ post, hero }: ArticleHeroCardProps): JSX.Element => (
  <CardContainer hero={hero}>
    <ArticleLink to={post.slug}>
      <CardImage src={post.coverImageUrl} alt={post.coverImageAlt} rounded />
    </ArticleLink>
    <Details hero={hero}>
      <ArticleMeta>
        <ArticleHeader>
          <ArticleInfo post={post} />
          <ArticleLink to={post.slug}>
            <H3>{post.title}</H3>
          </ArticleLink>
        </ArticleHeader>
        <ArticleLink to={post.slug}>
          <ArticleExcerpt hero={hero}>{post.excerpt}</ArticleExcerpt>
        </ArticleLink>
      </ArticleMeta>
      {hero && <ReadButton to={post.slug} />}
    </Details>
  </CardContainer>
);

export default ArticleCard;
