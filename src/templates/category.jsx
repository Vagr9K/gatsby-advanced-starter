import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layouts";
import PostListing from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";

export default function CategoryTemplate({ pageContext, data }) {
  const config = useContext(ConfigContext);

  const { category } = pageContext;
  const postEdges = data.allMdx.edges;
  return (
    <Layout>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.website.title}`}
        />
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___datePublished], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            dateModified
          }
        }
      }
    }
  }
`;
