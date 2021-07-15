import React from "react";
import { format } from "date-fns";
import _ from "lodash";

import { Types } from "gatsby-theme-advanced";

import * as S from "./styles";

type ArticleInfoProps = {
  post: Types.Post;
};

const ArticleInfo = ({ post }: ArticleInfoProps): JSX.Element => {
  const categoryUrl = post.category
    ? `/category/${_.kebabCase(post.category.toLowerCase())}`
    : undefined;

  const publicationDate = `${categoryUrl ? "\u00A0⋅ " : ""}${format(
    post.datePublished,
    "LLL d, y"
  )}`;

  const timeToRead = ` ⋅ ${post.timeToRead} min read`;

  const infoCaption = `${publicationDate}${timeToRead}`;

  // Display the first 2 tags
  const tagLinks = post.tags?.slice(0, 2).map((tag) => (
    <S.TagLink key={tag} to={`/tag/${_.kebabCase(tag.toLowerCase())}`}>
      {tag}
    </S.TagLink>
  ));

  return (
    <S.Wrapper>
      <S.InfoGrid>
        {categoryUrl && (
          <S.CategoryLink to={categoryUrl}>{post.category}</S.CategoryLink>
        )}
        <S.Caption>{infoCaption}</S.Caption>
      </S.InfoGrid>
      <S.TagGrid>{tagLinks}</S.TagGrid>
    </S.Wrapper>
  );
};

export default ArticleInfo;
