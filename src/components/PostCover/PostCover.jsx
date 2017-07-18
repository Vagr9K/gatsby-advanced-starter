import React, { Component } from 'react';
import './PostCover.scss';

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    const post = postNode.frontmatter;
    const coverHeight = mobile ? 180 : 350;
    return (
      <div style={{ backgroundImage: `url(${post.cover})`, height: `${coverHeight}px` }} className="md-grid md-cell--9 post-cover" />
    );
  }
}

export default PostCover;
