import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import PostListing from '../components/PostListing/PostListing.jsx';

class Index extends React.Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    const currPath = this.props.location.pathname;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout
        SiteConfig={config}
        location={currPath}
        pathPrefix={this.props.data.site.pathPrefix}
      >
        <Helmet title={config.siteTitle} />
        <PostListing postEdges={postEdges} />
      </MainLayout>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    site{
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
  allMarkdownRemark(
      limit: 2000,
      sort: { fields: [frontmatter___date], order: DESC },
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
}
`;
