import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';
import _ from 'lodash';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import './PostCover.scss';

class PostCover extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <Media forceAspect={false} className="post-cover-img">
        <img src={post.cover} alt={post.title} />
        <MediaOverlay className="post-info">
          <CardTitle
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title={`Published on ${post.date}`}
            subtitle={`${postNode.timeToRead} min read`}
          />
          <Link to={`/categories/${_.kebabCase(post.category)}`}>
            <CardTitle
              avatar={<Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />}
              title={'In category'}
              subtitle={post.category}
            />
          </Link>
        </MediaOverlay>
      </Media>
    );
  }
}

export default PostCover;
