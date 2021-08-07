import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import useScrollBasedFetching from "./useScrollBasedFetching";

import {
  FeedPageMetaFromJson,
  PostFromJsonList,
  jsonPostIntoPost,
  FeedList,
  PostPlaceholder,
} from "../../types";
import { PageContext } from "./types";
import { constants, SiteConfig, useConfig } from "../../config";

// Calculate the base URL for the feed
const getBaseUrl = (pageContext: PageContext, config: SiteConfig): string =>
  `${config.pathPrefix}/${constants.feedMetaDirectory}${pageContext.feedType}${
    pageContext.feedId ? `-${pageContext.feedId}` : ""
  }`;

// Generate a fetch function for the feed
const getFetchFunc =
  (baseUrl: string) =>
  async ({ pageParam = 0 }): Promise<FeedPageMetaFromJson> => {
    const response = await fetch(`${baseUrl}-${pageParam}.json`);
    if (!response.ok) {
      throw new Error("Network response for fetching feed page was not ok.");
    }
    return response.json() as Promise<FeedPageMetaFromJson>;
  };

// Generate placeholders for currently loading posts
const createPostPlaceholders = (
  keyPrefix: string,
  count?: number
): PostPlaceholder[] =>
  Array(count || constants.postsPerFeedPage)
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
  const config = useConfig();

  const baseUrl = getBaseUrl(pageContext, config);

  // Setup an infinite feed query
  const feedQuery = useInfiniteQuery(
    [pageContext.feedType, pageContext.feedId],
    getFetchFunc(baseUrl),
    {
      getNextPageParam: (lastPage) => lastPage.next,
      // Set the initial page data supplied by the page context
      initialData: {
        pages: [pageContext.feedPageMeta],
        pageParams: [pageContext.pageIndex],
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
      list.push(...createPostPlaceholders("next", lastPage?.nextCount));
    }

    return list;
  }, [
    feedQuery.data,
    pageContext.feedPageMeta.posts,
    feedQuery.isFetchingNextPage,
  ]);

  return {
    feedElementRef,
    feedListing,
  };
};

export default useInfiniteFeed;
