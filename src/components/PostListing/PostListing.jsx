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
  const squares = [
    {
      render: true,
      index: 0,
    },
    {
      render: false,
    },
    {
      render: false,
    },
    {
      render: false,
    },
    {
      render: true,
      index: 1,
    },
    {
      render: false,
    },
    {
      render: false,
    },
    {
      render: false,
    },
    {
      render: true,
      index: 2,
    },
  ];

  return (
    <div className="home-post-wrapper">
      {
        /* Your post list here. */
        squares.map((square) =>
          square.render ? (
            <>
              <Link
                className="home-post-link"
                to={postList[square.index].path}
                key={postList[square.index].title}
              >
                <h1 className="home-post-title">
                  {postList[square.index].title}
                </h1>
              </Link>
            </>
          ) : (
            <div className="filler" />
          )
        )
      }
    </div>
  );
}

export default PostListing;
