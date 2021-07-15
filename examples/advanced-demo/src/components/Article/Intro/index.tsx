import React from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Link, Types } from "gatsby-theme-advanced";

import "./styles.css";

type Post = Types.Post;

type IntroProps = {
  post: Post;
};

const renderTags = (post: Post): JSX.Element | null => {
  if (!post.tags) return null;

  const tagList = post.tags.map((tag) => (
    <Link key={tag} to={`/tag/${tag}`}>
      <h3>{tag}</h3>
    </Link>
  ));

  return (
    <div className="article-tag-grid ">
      <h3>Tags:</h3>
      {tagList}
    </div>
  );
};

const renderCategory = (post: Post): JSX.Element | null => {
  const { category } = post;

  if (!category) return null;

  return (
    <div className="category-container">
      <h3>Category:</h3>
      <Link to={`/category/${category}`}>
        <h3>{category}</h3>
      </Link>
    </div>
  );
};

const Intro = ({ post }: IntroProps): JSX.Element => {
  const { coverImg } = post;
  if (!coverImg)
    throw Error("Article: Failed to render Article without cover image.");

  const gatsbyImage = getImage(coverImg);

  if (!gatsbyImage)
    throw Error(
      "Article: Failed to get Gatsby image data from the cover image."
    );

  return (
    <div className="article-intro">
      <h1 className="post-title">{post.title}</h1>
      <p>{post.excerpt}</p>
      <figure>
        <GatsbyImage image={gatsbyImage} alt={post.coverImageAlt} />
        <figcaption>{post.coverImageAlt}</figcaption>
      </figure>
      <h3>{`Time to read: ${post.timeToRead} minutes`}</h3>
      {renderCategory(post)}
      {renderTags(post)}
    </div>
  );
};

export default Intro;
