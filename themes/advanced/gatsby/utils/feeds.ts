/* eslint "no-console": "off" */

import path from "path";
import fs from "fs";

import { Actions } from "gatsby";

import { constants, SiteConfig, withBasePath } from "../../src/config";
import { FeedPageMeta, PostList } from "../../src/types";

const FEED_META_DIR = `public/${constants.feedMetaDirectory}`;
const POSTS_PER_PAGE = constants.postsPerFeedPage;

const FEED_COMPONENT = require.resolve("../../src/templates/feed/index.tsx");

// Save feed page metadata in the public folder for later retrieval by the client side code
export const saveFeedPageMeta = async (
  feedType: string,
  feedPageIndex: number,
  pageMeta: FeedPageMeta,
  feedId?: string
): Promise<void> => {
  const filePath = path.join(
    FEED_META_DIR,
    `${feedType}${feedId ? `-${feedId}` : ""}-${feedPageIndex}.json`
  );

  const stringifiedListing = JSON.stringify(pageMeta);

  await fs.promises.writeFile(filePath, stringifiedListing);
};

// Calculate feed path
export const getFeedRoute = (
  config: SiteConfig,
  feedType: string,
  feedId?: string
): string => {
  const slug =
    feedType === "index" ? "/" : `/${feedType}${feedId ? `/${feedId}` : ""}`;

  // Add basePath
  return withBasePath(config, slug);
};

// Cleans up and sets up the feed meta folder
export const initFeedMeta = (): void => {
  if (!fs.existsSync(FEED_META_DIR)) {
    fs.mkdirSync(FEED_META_DIR);
  } else {
    fs.rmSync(FEED_META_DIR, { recursive: true });
    fs.mkdirSync(FEED_META_DIR);
  }
};

// Calculate the metadata for a feed page
export const createPageMeta = (
  pageIndex: number,
  pageCount: number,
  feedPosts: PostList
): FeedPageMeta => {
  const limit = POSTS_PER_PAGE;
  const skip = pageIndex * POSTS_PER_PAGE;

  const feedPagePosts = feedPosts.slice(skip, skip + limit);

  // Compute and save a feed page metadata file
  const nextPage = pageIndex + 1 < pageCount ? pageIndex + 1 : undefined;
  const prevPage = pageIndex > 0 ? pageIndex - 1 : undefined;

  // Calculate the amount of pages in the next batch
  const postsLeft = feedPosts.length - skip - limit;
  const nextCount = postsLeft > 0 ? Math.min(postsLeft, limit) : undefined;
  const prevCount = typeof prevPage === "number" ? limit : undefined;

  return {
    current: pageIndex,
    next: nextPage,
    nextCount,
    prev: prevPage,
    prevCount,
    posts: feedPagePosts,
  };
};

// Creates a paginated feed with Gatsby pages and feed metadata
export const createFeed = async (
  config: SiteConfig,
  actions: Actions,
  feedPosts: PostList,
  feedType: string,
  feedId?: string
): Promise<void> => {
  // Calculate the page count
  const pageCount = Math.ceil(feedPosts.length / POSTS_PER_PAGE);

  // For each page
  const tasks = [...Array(pageCount).keys()].map(async (pageIndex) => {
    const pageMeta = createPageMeta(pageIndex, pageCount, feedPosts);
    await saveFeedPageMeta(feedType, pageIndex, pageMeta, feedId);

    // Create an index page that resides on `${feedId}/`
    if (pageIndex === 0) {
      const route = getFeedRoute(config, feedType, feedId);

      actions.createPage({
        path: route,
        component: FEED_COMPONENT,
        context: {
          pageCount,
          pageIndex,
          feedType,
          feedId,
          feedPageMeta: pageMeta,
        },
      });
    }
  });

  await Promise.all(tasks);
};
