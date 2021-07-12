import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Post } from "gatsby-theme-advanced/src/types";

import Intro from "./Intro";
import Share from "./Share";

import "./styles.css";

type ArticleProps = {
  post: Post;
};

const Article = ({ post }: ArticleProps): JSX.Element => {
  if (!post.body)
    throw Error(
      `Article: post data doesn't contain MDX body for rendering. Aborting. Post slug: ${post.slug}`
    );

  return (
    <article className="article-wrapper">
      <Intro post={post} />
      <div className="article-content-wrapper">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <Share post={post} />
    </article>
  );
};

export default Article;
