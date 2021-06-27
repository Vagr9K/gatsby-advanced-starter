/* eslint "no-console": "off" */
/* eslint "@typescript-eslint/no-explicit-any": "off" */

import { queryIntoListing, PostList, MdxListingQuery } from "../../src/types";

// GraphQL queries for each feed
const indexListingQuery = `
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

const tagListingQuery = `
query TagPage($tag: String) {
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

const categoryListingQuery = `
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
          description
        }
      }
    }
  }
}
`;

type GraphqlType = <TData, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<{
  errors?: any;
  data?: TData;
}>;

type QueryResult = {
  errors?: any;
  data?: MdxListingQuery | undefined;
};

// Process the query results and return a PostList
const processQueryResult = (result: QueryResult): PostList => {
  // Exit on error
  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  if (!result.data) {
    console.warn("No data returned by the query. Returning empty PostList.");
    return [];
  }

  return queryIntoListing(result.data);
};

export const getIndexListing = async (
  graphql: GraphqlType
): Promise<PostList> => {
  const indexQueryResult = await graphql<MdxListingQuery>(indexListingQuery);

  return processQueryResult(indexQueryResult);
};

export const getTagListing = async (
  graphql: GraphqlType,
  tag: string
): Promise<PostList> => {
  const tagQueryResult = await graphql<MdxListingQuery>(tagListingQuery, {
    tag,
  });

  return processQueryResult(tagQueryResult);
};

export const getCategoryListing = async (
  graphql: GraphqlType,
  category: string
): Promise<PostList> => {
  const categoryQueryResult = await graphql<MdxListingQuery>(
    categoryListingQuery,
    { category }
  );

  return processQueryResult(categoryQueryResult);
};
