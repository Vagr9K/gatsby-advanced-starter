import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout/MainLayout.jsx';

export default class CategoryTemplate extends React.Component {
  render() {
    const config = this.props.data.site.siteMetadata;
    return (
      <MainLayout SiteConfig={config} location={this.props.location.pathname}>
        <Helmet title={`Posts in category "${this.props.pathContext.category}" | ${config.siteTitle}`} />
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
