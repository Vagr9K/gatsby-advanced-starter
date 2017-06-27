import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';
import Chip from 'react-md/lib/Chips';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import './post-preview.scss';

class Index extends React.Component {
  getPostList() {
    const postList = [];
    const postPath = '/posts/';
    this.props.route.pages.forEach((page) => {
      if (page.path.includes(postPath)) {
        postList.push({
          path: page.path,
          tags: page.data.tags,
          cover: page.data.cover,
          title: page.data.title,
          date: page.data.date,
        });
      }
    });
    return postList;
  }

  static renderPostPreview(title, cover, date, tags, path) {
    let tagChips = null;
    if (tags) {
      tagChips = tags.map(tag =>
        <Link key={tag} style={{ textDecoration: 'none' }} to={prefixLink('/tags/')}>
          <Chip label={tag} className="post-preview-tags" />
        </Link>,
       );
    }
    return (

      <Card key={path} raise className="md-grid md-cell md-cell--4">
        <Link style={{ textDecoration: 'none' }} to={prefixLink(path)}>
          <Media>
            <img src={cover} alt={title} />
            <MediaOverlay>
              <CardTitle title={title}>
                <Button raised primary label="Read" className="md-cell--right" />
              </CardTitle>
            </MediaOverlay>
          </Media>
          <CardTitle
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title="Published on"
            subtitle={date}
          />
        </Link>
        <div>
          {
            tagChips
          }
        </div>

      </Card>
    );
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="index-container md-grid">
        <Helmet title={config.siteTitle} />
        {
          postList.map(post => Index.renderPostPreview(
            post.title,
            post.cover,
            post.date,
            post.tags,
            post.path))
       }
      </div>
    );
  }
}

export default Index;
