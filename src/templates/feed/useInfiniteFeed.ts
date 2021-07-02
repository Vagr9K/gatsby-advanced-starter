import { useContext, useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import ConfigContext from "../../context/ConfigContext";

import useScrollBasedFetching from "./useScrollBasedFetching";

import {
  FeedPageMetaFromJson,
  PostFromJsonList,
  jsonPostIntoPost,
  FeedList,
  PostPlaceholder,
} from "../../types";
import { PageContext } from "./types";
import { SiteConfig } from "../../config";

// Calculate the base URL for the feed
const getBaseUrl = (config: SiteConfig, pageContext: PageContext): string =>
  `/${config.feedMetaDirectory}${pageContext.feedType}${
    pageContext.feedId ? `-${pageContext.feedId}` : ""
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
  const config = useContext(ConfigContext);

  const baseUrl = getBaseUrl(config, pageContext);

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
      list.push(...createPostPlaceholders(config.postsPerFeedPage, "next"));
    }

    // When loading the previous page, show placeholder posts
    if (feedQuery.isFetchingPreviousPage) {
      list.unshift(...createPostPlaceholders(config.postsPerFeedPage, "prev"));
    }

    return list;
  }, [
    feedQuery.data,
    pageContext.feedPageMeta.posts,
    feedQuery.isFetchingNextPage,
    feedQuery.isFetchingPreviousPage,
    config.postsPerFeedPage,
  ]);

  return {
    feedElementRef,
    feedListing,
  };
};

export default useInfiniteFeed;
