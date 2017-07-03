import React from 'react';
import Helmet from 'react-helmet';
import Card from 'react-md/lib/Cards';
import CardText from 'react-md/lib/Cards/CardText';
import UserInfo from '../components/UserInfo/UserInfo.jsx';
import Disqus from '../components/Disqus/Disqus.jsx';
import './atom-one-dark.css';
import './post.scss';

export default class PostTemplate extends React.Component {
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark;
    const config = this.props.data.site.siteMetadata;
    if (!post.id) {
      post.id = this.props.location.pathname;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="md-grid post-page-container">

        <Helmet
          title={`${post.frontmatter.title} | ${config.siteTitle}`}
        />
        <Card className="md-grid md-cell md-cell--12 post">
          <CardText className="post-body">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </CardText>
        </Card>
        <UserInfo className="md-grid md-cell md-cell--12" SiteConfig={config} />
        <Disqus post={post.frontmatter} disqusShortname={config.disqusShortname} />
      </div>
    );
  }
}

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
      cover
      date
    }
  }

  site {
    siteMetadata {
      siteTitle
    }
  }
}
`;
