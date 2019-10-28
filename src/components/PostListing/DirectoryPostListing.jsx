import React from "react";
import { Link } from "gatsby";

class DirectoryPostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdgesDirectory.forEach(postEdge => {
      postList.push({
        // path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        // cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        // date: postEdge.node.fields.date,
        // excerpt: postEdge.node.excerpt,
        // timeToRead: postEdge.node.timeToRead,
        website: postEdge.node.frontmatter.website
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <a href={post.website} target="_blank">
            <h2>{post.title}</h2>
          </a>
        ))}
      </div>
    );
  }
}

export default DirectoryPostListing;

