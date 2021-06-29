// GraphQL queries for each feed
export const indexListingQuery = `
query IndexFeedListing($skip: Int, $limit: Int) {
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
      }
    }
  }
}
`;

export const tagListingQuery = `
query TagFeedListing($tag: String) {
  allMdx(
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
          dateModified
          description
        }
      }
    }
  }
}
`;

export const categoryListingQuery = `
query CategoryFeedListing($category: String) {
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
          description
        }
      }
    }
  }
}
`;
