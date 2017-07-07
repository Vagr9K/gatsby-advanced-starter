import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import PostListing from '../components/PostListing/PostListing.jsx';


export default class CategoryTemplate extends React.Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const currPath = this.props.location.pathname;
    return (
      <MainLayout SiteConfig={config} location={currPath}>
        <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </MainLayout>

    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query CategoryPage($category: String) {
  allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { category: { eq: $category }} }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover
            date
          }
        }
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
