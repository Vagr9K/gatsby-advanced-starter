import React from "react";
import { format } from "date-fns";
import { Post } from "../../types";

import {
  TagLink,
  ArticleInfoContainer,
  PostInfo,
  CategoryLink,
  PostInfoCaption,
  TagList,
} from "./style";

type ArticleInfoProps = {
  post: Post;
};

const ArticleInfo = ({ post }: ArticleInfoProps): JSX.Element => {
  const categoryUrl = post.category
    ? `/categories/${post.category}`
    : undefined;

  const publicationDateInfo = `${categoryUrl ? "\u00A0⋅ " : ""}${format(
    post.datePublished,
    "LLL d, y"
  )}`;

  const timeToReadInfo = ` ⋅ ${post.timeToRead} min read`;

  const postInfo = `${publicationDateInfo}${timeToReadInfo}`;

  const tagLinks = post.tags?.slice(0, 2).map((tag) => (
    <TagLink key={tag} to={`/tags/${tag}`}>
      {tag}
    </TagLink>
  ));

  return (
    <ArticleInfoContainer>
      <PostInfo>
        {categoryUrl && (
          <CategoryLink to={categoryUrl}>{post.category}</CategoryLink>
        )}
        <PostInfoCaption>{postInfo}</PostInfoCaption>
      </PostInfo>
      <TagList>{tagLinks}</TagList>
    </ArticleInfoContainer>
  );
};

export default ArticleInfo;
