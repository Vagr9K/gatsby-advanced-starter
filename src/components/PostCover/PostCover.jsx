import React, { Component } from 'react';
import Media from 'react-md/lib/Media';
import './PostCover.scss';

class PostCover extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <Media forceAspect={false} className="md-grid md-cell--9 post-cover-img">
        <img src={post.cover} alt={post.title} />
      </Media>
    );
  }
}

export default PostCover;
