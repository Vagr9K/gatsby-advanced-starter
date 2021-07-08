import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import { kebabCase } from "lodash";

import useScrollBasedFetching from "./useScrollBasedFetching";

import {
  FeedPageMetaFromJson,
  PostFromJsonList,
  jsonPostIntoPost,
  FeedList,
  PostPlaceholder,
} from "../../types";
import { PageContext } from "./types";
import { constants } from "../../config";

// Calculate the base URL for the feed
const getBaseUrl = (pageContext: PageContext): string =>
  `/${constants.feedMetaDirectory}${pageContext.feedType}${
    pageContext.feedId ? `-${kebabCase(pageContext.feedId)}` : ""
  }`;

// Generate a fetch function for the feed
const getFetchFunc =
  (baseUrl: string) =>
  async ({ pageParam = 0 }): Promise<FeedPageMetaFromJson> => {
    const response = await fetch(`${baseUrl}-${pageParam}.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json() as Promise<FeedPageMetaFromJson>;
  };

// Generate placeholders for currently loading posts
const createPostPlaceholders = (
  count: number,
  keyPrefix: string
): PostPlaceholder[] =>
  Array(count)
    .fill(0)
    .map((_, idx) => ({
      isPlaceholder: true,
      key: `${keyPrefix}-${idx}`,
    }));

const useInfiniteFeed = (
  pageContext: PageContext
): {
  feedElementRef: React.RefObject<HTMLDivElement>;
  feedListing: FeedList;
} => {
  const baseUrl = getBaseUrl(pageContext);

  // Setup an infinite feed query
  const feedQuery = useInfiniteQuery(
    [pageContext.feedType, pageContext.feedId],
    getFetchFunc(baseUrl),
    {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (firstPage) => firstPage.prev,
      // Set the initial page data supplied by the page context
      initialData: {
        pages: [pageContext.feedPageMeta],
        pageParams: [undefined],
      },
    }
  );

  const feedElementRef = useScrollBasedFetching(feedQuery);

  // Memoize the postList
  const feedListing = useMemo(() => {
    const jsonPostList: PostFromJsonList =
      feedQuery?.data?.pages.map((page) => page.posts).flat() ||
      pageContext.feedPageMeta.posts;

    const list: FeedList = jsonPostList.map(jsonPostIntoPost);

    // When loading the next page, show placeholder posts
    if (feedQuery.isFetchingNextPage) {
      const lastPage = feedQuery.data?.pages[feedQuery.data?.pages.length - 1];
      list.push(
        ...createPostPlaceholders(
          lastPage?.nextCount || constants.postsPerFeedPage,
          "next"
        )
      );
    }

    // When loading the previous page, show placeholder posts
    if (feedQuery.isFetchingPreviousPage) {
      const firstPage = feedQuery.data?.pages[0];
      list.unshift(
        ...createPostPlaceholders(
          firstPage?.prevCount || constants.postsPerFeedPage,
          "prev"
        )
      );
    }

    return list;
  }, [
    feedQuery.data,
    pageContext.feedPageMeta.posts,
    feedQuery.isFetchingNextPage,
    feedQuery.isFetchingPreviousPage,
  ]);

  return {
    feedElementRef,
    feedListing,
  };
};

export default useInfiniteFeed;