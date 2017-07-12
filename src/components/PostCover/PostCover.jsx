import React, { Component } from 'react';
import Media from 'react-md/lib/Media';

class PostCover extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <Media aspectRatio="4-1" className="md-grid md-cell--9">
        <img src={post.cover} alt={post.title} />
      </Media>
    );
  }
}

export default PostCover;
