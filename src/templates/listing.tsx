import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import { PostListing } from "../components/PostListing";
import { queryIntoListing } from "../types";
import ListingPageWrapper from "../components/shared/ListingPageWrapper";

type ListingProps = {
  data: GatsbyTypes.ListingQueryQuery;
};

const Listing = ({ data }: ListingProps): JSX.Element => (
  <Layout>
    <ListingPageWrapper>
      <PostListing listing={queryIntoListing(data)} />
    </ListingPageWrapper>
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
