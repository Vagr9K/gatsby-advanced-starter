import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <h1>Posts by {tag}</h1>
          
          <DirectoryListing postEdgesDirectory={postEdges} />
        
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            website
            twit
            inst
            category
            tags
          }
        }
      }
    }
  }
`;
