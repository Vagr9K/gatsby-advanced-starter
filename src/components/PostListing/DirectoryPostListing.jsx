import React from "react";
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
      <div class="directoryList">
        {/* Your post list here. */
        postList.map(post => (
          
          <React.Fragment>
            
            <div class="directoryListItem">
            <a href={post.website} target="_blank"> <h2> {post.title} </h2></a>
            {/* force alphabatize listing of tags mayhaps? */}
            <PostTags tags={post.tags} />
            {/* include social handle, make a new component */}
            </div>

          </React.Fragment>
        ))}
      </div>
      
    );
  }
}

export default DirectoryPostListing;

