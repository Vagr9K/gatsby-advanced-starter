import React from "react";
import PostTags from "../Filters/PostTags"

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
        {
        postList.map(post => (
          
          <React.Fragment>
            
            {/* 
            Have a class added for each tag that's present. 
            Add an additional a:hover class for each that changes its own display.
            Needs to be added to the side rail listing as well. 
            */}
            <div class="directoryListItem">
            <a href={post.website} target="_blank"> {post.title} </a>
            {/* <PostTags tags={post.tags} /> */}
            {/* include social handle, make a new component */}
            </div>

          </React.Fragment>
        ))}
      </div>
      
    );
  }
}

export default DirectoryPostListing;

