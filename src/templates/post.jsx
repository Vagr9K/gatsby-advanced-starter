import React from 'react';
import Helmet from 'react-helmet';
import Card from 'react-md/lib/Cards';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';
import _ from 'lodash';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import Disqus from '../components/Disqus/Disqus.jsx';
import PostTags from '../components/PostTags/PostTags.jsx';
import './atom-one-dark.css';
import './post.scss';

export default class PostTemplate extends React.Component {
  render() {
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const config = this.props.data.site.siteMetadata;
    if (!post.id) {
      post.id = this.props.location.pathname;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <MainLayout
        SiteConfig={config}
        location={this.props.location.pathname}
        pathPrefix={this.props.data.site.pathPrefix}
      >
        <div className="md-grid post-page-container">

          <Helmet
            title={`${post.title} | ${config.siteTitle}`}
          />
          <Card className="md-grid md-cell md-cell--12 post">
            <CardText className="post-body">
              <Media forceAspect={false} className="cover-img">
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
              <h1 className="md-display-3 post-header">{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </CardText>
            <PostTags tags={post.tags} />
          </Card>
          <UserInfo className="md-grid md-cell md-cell--12" SiteConfig={config} />
          <Disqus post={post} disqusShortname={config.disqusShortname} />
        </div>
      </MainLayout>

    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    timeToRead
    frontmatter {
      title
      cover
      date
      category
      tags
    }
  }

  site {
      pathPrefix
      siteMetadata {
        siteTitle
        disqusShortname
        postDefaultCategoryID
        userName
        userLocation
        userAvatar
        userDescription
        userLinks {
          label
          url
          iconClassName
        }
        copyright
    }
  }
}
`;
