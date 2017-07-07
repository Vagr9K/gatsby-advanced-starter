import React from 'react';
import PostPreview from '../PostPreview/PostPreview.jsx';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postNodes.forEach((postNode) => {
      postList.push({
        path: postNode.node.fields.slug,
        tags: postNode.node.frontmatter.tags,
        cover: postNode.node.frontmatter.cover,
        title: postNode.node.frontmatter.title,
        date: postNode.node.frontmatter.date,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid">
        {
          postList.map(post => (<PostPreview key={post.title} postInfo={post} />))
        }
      </div>
    );
  }
}

export default PostListing;
