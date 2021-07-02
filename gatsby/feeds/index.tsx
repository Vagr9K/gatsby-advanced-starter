/* eslint "no-console": "off" */

import path from "path";
import fs from "fs";
import _ from "lodash";
import { Actions } from "gatsby";

import config from "../../src/config";

import { FeedPageMeta, PostList } from "../../src/types";

const FEED_META_DIR = `public/${config.feedMetaDirectory}`;
const POSTS_PER_PAGE = config.postsPerFeedPage;

const FEED_COMPONENT = path.resolve("src/templates/feed/index.tsx");

// Save feed page metadata in the public folder for later retrieval by the client side code
const saveFeedPageMeta = async (
  feedType: string,
  feedPageIndex: number,
  pageMeta: FeedPageMeta,
  feedId?: string
) => {
  const filePath = path.join(
    FEED_META_DIR,
    `${feedType}${feedId ? `-${feedId}` : ""}-${feedPageIndex}.json`
  );

  const stringifiedListing = JSON.stringify(pageMeta);

  await fs.promises.writeFile(filePath, stringifiedListing);
};

// Cleans up and sets up the feed meta folder
export const initFeedMeta = (): void => {
  if (!fs.existsSync(FEED_META_DIR)) {
    fs.mkdirSync(FEED_META_DIR);
  } else {
    fs.rmdirSync(FEED_META_DIR, { recursive: true });
    fs.mkdirSync(FEED_META_DIR);
  }
};

// Creates a paginated feed with Gatsby pages and feed metadata
export const createFeed = async (
  actions: Actions,
  feedPosts: PostList,
  feedType: string,
  feedId?: string
): Promise<void> => {
  // Calculate the page count
  const pageCount = Math.ceil(feedPosts.length / POSTS_PER_PAGE);

  // For each page
  const tasks = [...Array(pageCount).keys()].map(async (pageIndex) => {
    const limit = POSTS_PER_PAGE;
    const skip = pageIndex * POSTS_PER_PAGE;

    const feedPagePosts = feedPosts.slice(skip, skip + limit);

    const formattedFeedId = _.kebabCase(feedId);

    // Compute and save a feed page metadata file
    const nextPage = pageIndex + 1 < pageCount ? pageIndex + 1 : undefined;
    const prevPage = pageIndex > 0 ? pageIndex - 1 : undefined;

    // Calculate the amount of pages in the next batch
    const nextCount = nextPage
      ? Math.min(pageCount - skip + 1, limit)
      : undefined;
    const prevCount = prevPage ? limit : undefined;

    const pageMeta: FeedPageMeta = {
      current: pageIndex,
      next: nextPage,
      nextCount,
      prev: prevPage,
      prevCount,
      posts: feedPagePosts,
    };

    await saveFeedPageMeta(feedType, pageIndex, pageMeta, formattedFeedId);

    // Index page resides on `/${PageNum}`
    // Other feeds have the `${feedName}/${feedId}/${PageNum}` format
    // Except for the first page which is on `${feedName}/${feedId}/` and "/" respectively
    const slugPrefix =
      feedType === "index"
        ? "/"
        : `/${feedType}${formattedFeedId ? `/${formattedFeedId}` : ""}`;

    const routePath =
      pageIndex === 0
        ? slugPrefix
        : `${slugPrefix !== "/" ? `${slugPrefix}` : ""}/${pageIndex + 1}/`;

    // Create a Gatsby page based on the calculated information
    actions.createPage({
      path: routePath,
      component: FEED_COMPONENT,
      context: {
        limit,
        skip,
        pageCount,
        pageIndex,
        feedType,
        feedId,
        feedPageMeta: pageMeta,
      },
    });
  });

  await Promise.all(tasks);
};
