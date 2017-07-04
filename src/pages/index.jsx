import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../components/MainLayout/MainLayout.jsx';
import PostPreview from '../components/PostPreview/PostPreview.jsx';

class Index extends React.Component {
  getPostList() {
    const postList = [];
    this.props.data.allMarkdownRemark.edges.forEach((edge) => {
      postList.push({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        cover: edge.node.frontmatter.cover,
        title: edge.node.frontmatter.title,
        date: edge.node.frontmatter.date,
      });
    });
    return postList;
  }
  render() {
    const config = this.props.data.site.siteMetadata;
    const postList = this.getPostList();
    return (
      <MainLayout SiteConfig={config} location={this.props.location.pathname}>
        <div className="md-grid">
          <Helmet title={config.siteTitle} />
          {
           postList.map(post => (<PostPreview key={post.title} postInfo={post} />))
        }
        </div>
      </MainLayout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata {
        siteTitle
        linkPrefix
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
