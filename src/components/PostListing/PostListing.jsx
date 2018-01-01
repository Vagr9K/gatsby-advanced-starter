import React from "react";
import Link from "gatsby-link";
import moment from "moment";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.fields.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
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
          <div key={post.path}>
            <Link to={post.path}>
              <h1>
                {moment(post.date).format(this.props.dateFormat)} - {post.title}
              </h1>
            </Link>
            <span>{post.excerpt}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
