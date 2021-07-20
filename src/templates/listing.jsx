import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import BackgroundLogo from "../components/BackgroundLogo";

function Listing({ data }) {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PostListing postEdges={postEdges} />
      <BackgroundLogo />
    </Layout>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
          }
        }
      }
    }
  }
`;
