/* eslint "no-console": "off" */
/* eslint "@typescript-eslint/no-explicit-any": "off" */

import { queryIntoListing, PostList, MdxListingQuery } from "../../src/types";

import {
  categoryListingQuery,
  indexListingQuery,
  tagListingQuery,
} from "../../src/templates/feed/queries";

type GraphqlType = <TData, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<{
  errors?: string;
  data?: TData;
}>;

type QueryResult = {
  errors?: string;
  data?: MdxListingQuery | undefined;
};

// Process the query results and return a PostList
const processQueryResult = (result: QueryResult): PostList => {
  // Exit on error
  if (result.errors) {
    console.error("Error while processing query results:");
    console.error(result.errors);
    throw Error(result.errors);
  }

  if (!result.data) {
    console.warn(
      "processQueryResult: No data returned by the query. Returning empty PostList."
    );
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
