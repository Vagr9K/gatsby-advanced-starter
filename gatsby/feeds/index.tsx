/* eslint "no-console": "off" */

import path from "path";
import fs from "fs";
import _ from "lodash";
import { Actions } from "gatsby";

import { PostList } from "../../src/types";

const FEED_META_DIR = "public/feed_meta/";
const POSTS_PER_PAGE = 6;

// Save feed page metadata in the public folder for later retrieval by the client side code
const saveFeedPageMeta = async (
  feedType: string,
  feedPageIndex: number,
  pagePostListing: PostList,
  feedIdentifier?: string
) => {
  const filePath = path.join(
    FEED_META_DIR,
    `${feedType}${
      feedIdentifier ? `-${feedIdentifier}` : ""
    }-${feedPageIndex}.json`
  );

  const stringifiedListing = JSON.stringify(pagePostListing);

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
  pageComponentPath: string,
  feedPosts: PostList,
  feedType: string,
  feedIdentifier?: string
): Promise<void> => {
  // Calculate the page count
  const pageCount = Math.ceil(feedPosts.length / POSTS_PER_PAGE);

  // For each page
  const tasks = [...Array(pageCount).keys()].map(async (pageIndex) => {
    const limit = POSTS_PER_PAGE;
    const skip = pageIndex * POSTS_PER_PAGE;

    const feedPagePosts = feedPosts.slice(skip, skip + limit);

    const formattedFeedId = _.kebabCase(feedIdentifier);

    await saveFeedPageMeta(feedType, pageIndex, feedPagePosts, formattedFeedId);

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
      component: pageComponentPath,
      context: {
        limit,
        skip,
        pageCount,
        initPageIndex: pageIndex,
        [feedType]: feedIdentifier,
      },
    });
  });

  await Promise.all(tasks);
};
