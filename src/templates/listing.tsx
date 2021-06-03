import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import { PostListing } from "../components/PostListing";
import { queryIntoListing } from "../types";

const ListingContainer = styled.div`
  min-height: 100%;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type ListingProps = {
  data: GatsbyTypes.ListingQueryQuery;
};

const Listing = ({ data }: ListingProps): JSX.Element => (
  <Layout>
    <ListingContainer>
      <PostListing listing={queryIntoListing(data)} />
    </ListingContainer>
  </Layout>
);

export default Listing;

export const listingQuery = graphql`
  query ListingQuery($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: [frontmatter___datePublished], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          body
          excerpt
          timeToRead
          frontmatter {
            title
            description
            cover
            coverAlt
            tags
            category
            datePublished
            dateModified
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
