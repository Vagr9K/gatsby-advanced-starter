import { useContext, useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import ConfigContext from "../../context/ConfigContext";

import useScrollBasedFetching from "./useScrollBasedFetching";

import {
  FeedPageMetaFromJson,
  PostFromJsonList,
  PostList,
  jsonPostIntoPost,
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

const useInfiniteFeed = (
  pageContext: PageContext
): { feedElementRef: React.RefObject<HTMLDivElement>; postList: PostList } => {
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
  const postList = useMemo(() => {
    const jsonPostList: PostFromJsonList =
      feedQuery?.data?.pages
        .map((page) => page.posts)
        .flat()
        .filter(Boolean) || pageContext.feedPageMeta.posts;

    return jsonPostList.map(jsonPostIntoPost);
  }, [feedQuery.data, pageContext.feedPageMeta.posts]);

  return {
    feedElementRef,
    postList,
  };
};

export default useInfiniteFeed;
