import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        featuredImage: postEdge.node.frontmatter.featuredImage,
        title: postEdge.node.frontmatter.title,
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
      <div className="podcast">
        {/* This is the post list that create a link */}
        {/* add in the cover image here too */}
        
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h2>{post.title}</h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;

