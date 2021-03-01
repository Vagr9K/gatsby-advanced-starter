import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";

export default function TagTemplate({ pageContext, data }) {
  const config = useContext(ConfigContext);

  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.website.title}`} />
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___datePublished], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            datePublished
          }
        }
      }
    }
  }
`;
