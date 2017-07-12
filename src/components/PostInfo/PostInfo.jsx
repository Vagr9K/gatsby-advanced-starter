import React, { Component } from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';
import _ from 'lodash';
import './PostInfo.scss';

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${post.date}`}
          subtitle={`${postNode.timeToRead} min read`}
        />
        <Link className="category-link" to={`/categories/${_.kebabCase(post.category)}`}>
          <CardTitle
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />}
            title={'In category'}
            subtitle={post.category}
          />
        </Link>
      </div>
    );
  }
}

export default PostInfo;
