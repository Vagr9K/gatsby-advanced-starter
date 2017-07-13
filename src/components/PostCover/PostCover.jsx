import React, { Component } from 'react';
import Media from 'react-md/lib/Media';

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    const post = postNode.frontmatter;
    const aspectRatio = mobile ? '16-9' : '4-1';
    return (
      <Media aspectRatio={aspectRatio} className="md-grid md-cell--9">
        <img src={post.cover} alt={post.title} />
      </Media>
    );
  }
}

export default PostCover;
