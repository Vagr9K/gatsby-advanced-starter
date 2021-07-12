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
        squares.map((square, index) => {
          const renderSquare = square.render;
          const renderIndex = square.index;
          const to =
            renderSquare && postList
              ? postList[renderIndex]
                ? postList[renderIndex].path
                : null
              : null;
          const key =
            renderSquare && postList
              ? postList[renderIndex]
                ? postList[renderIndex].title
                : `postListFiller${index}`
              : `postListFiller${index}`;
          const title =
            renderSquare && postList
              ? postList[renderIndex]
                ? postList[renderIndex].title
                : null
              : null;

          return square.render ? (
            <div className="home-square">
              <Link className="home-post-link" to={to} key={key}>
                <h1 className="home-post-title">{title}</h1>
              </Link>
            </div>
          ) : (
            <div className="home-square filler" key={key} />
          );
        })
      }
    </div>
  );
}

export default PostListing;
