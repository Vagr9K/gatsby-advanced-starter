// GraphQL queries for each feed
export const indexListingQuery = `#graphql
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
          route
          pathName
          url
        }
        excerpt
        timeToRead
        frontmatter {
          title
          description
          cover {
            childImageSharp {
              gatsbyImageData(height: 368)
            }
          }
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

export const tagListingQuery = `#graphql
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
          route
          pathName
          url
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          category
          cover {
            childImageSharp {
              gatsbyImageData(height: 368)
            }
          }
          coverAlt
          datePublished
          dateModified
          description
        }
      }
    }
  }
}
`;

export const categoryListingQuery = `#graphql
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
          route
          pathName
          url
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          category
          cover {
            childImageSharp {
              gatsbyImageData(height: 368)
            }
          }
          coverAlt
          datePublished
          dateModified
          description
        }
      }
    }
  }
}
`;
