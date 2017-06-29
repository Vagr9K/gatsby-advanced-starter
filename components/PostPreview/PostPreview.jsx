import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Button from 'react-md/lib/Buttons';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import PostTags from '../PostTags/PostTags.jsx';

class PostPreview extends Component {

  render() {
    const { postInfo } = this.props;
    return (
      <Card key={postInfo.path} raise className="md-grid md-cell md-cell--4">
        <Link style={{ textDecoration: 'none' }} to={prefixLink(postInfo.path)}>
          <Media>
            <img src={postInfo.cover} alt={postInfo.title} />
            <MediaOverlay>
              <CardTitle title={postInfo.title}>
                <Button raised primary label="Read" className="md-cell--right" />
              </CardTitle>
            </MediaOverlay>
          </Media>
          <CardTitle
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title="Published on"
            subtitle={postInfo.date}
          />
        </Link>
        <PostTags tags={postInfo.tags} />

      </Card>
    );
  }
}

export default PostPreview;
