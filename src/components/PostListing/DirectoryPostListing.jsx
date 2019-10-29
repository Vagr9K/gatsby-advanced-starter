import React from "react";
import { Link } from "gatsby";
import PostTags from "../PostTags/PostTags"

class DirectoryPostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdgesDirectory.forEach(postEdge => {
      postList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div id="directoryList">
        {/* Your post list here. */
        postList.map(post => (
          
          <React.Fragment>
            
            <a href={post.website} target="_blank"> <h2> {post.title} </h2></a>
            <PostTags tags={post.tags} />
            {/* include social handle, make a new component */}

          </React.Fragment>
        ))}
      </div>
      
    );
  }
}

export default DirectoryPostListing;

