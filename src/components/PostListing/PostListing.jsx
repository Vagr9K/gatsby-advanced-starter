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
    <>
      {
        /* Your post list here. */
        postList.map((post) => {
          console.log("this is the post listing path", post.path);
          return (
            <div className="landing-post">
              <Link to={post.path} key={post.title}>
                <h1 className="landing-title">{post.title}</h1>
              </Link>
            </div>
          );
        })
      }
    </>
  );
}

export default PostListing;
