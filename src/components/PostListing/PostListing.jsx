/* eslint-disable no-nested-ternary */
import React from "react";
import { Link } from "gatsby";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <div className="home-post-wrapper">
      {
        /* Your post list here. */
        postList.map((post) => (
          <div className="home-square">
            <Link className="home-post-link" to={post.path} key={post.title}>
              <h1 className="home-post-title">{post.title}</h1>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default PostListing;
