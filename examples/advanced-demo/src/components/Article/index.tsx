import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { Types, Disqus } from "gatsby-theme-advanced";

import Intro from "./Intro";
import Share from "./Share";

import "./styles.css";

type ArticleProps = {
  post: Types.Post;
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
      <Disqus post={post} />
    </article>
  );
};

export default Article;
