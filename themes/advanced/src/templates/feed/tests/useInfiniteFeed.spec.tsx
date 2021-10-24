import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import fetchMock from "fetch-mock";
import { mocked } from "ts-jest/utils";

import useInfiniteFeed from "../useInfiniteFeed";
import { PageContext } from "../types";
import {
  FeedList,
  FeedPageMetaFromJson,
  Post,
  PostPlaceholder,
} from "../../../types";

import Index0 from "../../../../../test/fixtures/feedMetadata/index-0.json";
import Index1 from "../../../../../test/fixtures/feedMetadata/index-1.json";
import Index2 from "../../../../../test/fixtures/feedMetadata/index-2.json";

const pageMetadatas: FeedPageMetaFromJson[] = [
  Index0 as unknown as FeedPageMetaFromJson,
  Index1 as unknown as FeedPageMetaFromJson,
  Index2 as unknown as FeedPageMetaFromJson,
];

// Mock useRef so we can manipulate scroll state
jest.mock("react", () => {
  const originReact = jest.requireActual<typeof import("react")>("react");
  const mUseRef = jest.fn().mockImplementation(() => ({
    current: {
      getBoundingClientRect: () => ({
        bottom: 9999, // Pretend that the bottom is not visible
        top: 0,
      }),
    },
  }));
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock("../../../config/useConfig");

const mockedReact = mocked(React, true);

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactChildren }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const setupFetchMock = () => {
  fetchMock.mock(/\/feed_meta\/index-(.+).json/, (url) => {
    const regexMatch = /index-(.+).json/.exec(url);
    const pageId = regexMatch ? regexMatch[1] : undefined;

    if (!pageId) throw Error(`Feed page request missing index.`);

    const pageData = pageMetadatas[parseInt(pageId, 10)];
    if (!pageData)
      throw Error(`Tried to request non-existent page: ${pageId}.`);

    return { body: pageData, status: 200 };
  });
};

const startPageContext: PageContext = {
  feedId: undefined,
  feedPageMeta: Index0 as unknown as FeedPageMetaFromJson,
  feedType: "index",
  pageCount: 3,
  pageIndex: 0,
};

const isPostPlaceholder = (
  post: Post | PostPlaceholder
): post is PostPlaceholder => (post as PostPlaceholder).isPlaceholder === true;

const filterPlaceholders = (feedPosts: FeedList) =>
  feedPosts.filter(isPostPlaceholder);

const filterFullPosts = (feedPosts: FeedList) =>
  feedPosts.filter((post) => !isPostPlaceholder(post));

describe("useInfiniteFeed", () => {
  beforeAll(() => {
    setupFetchMock();
  });
  it("loads next feed pages on scroll", async () => {
    expect.assertions(6);

    await act(async () => {
      const { result, waitFor } = renderHook(
        () => useInfiniteFeed(startPageContext),
        {
          wrapper,
        }
      );

      // Wait for initial load
      await waitFor(() => result.current.feedListing.length === 5);

      // Mock the useRef to pretend that the element is fully viisble on screen
      mockedReact.useRef.mockImplementation(() => ({
        current: {
          getBoundingClientRect: () => ({
            bottom: 1, // Pretend that the bottom is visible
            top: 0,
          }),
        },
      }));

      const loadNext = async (targetCount: number) => {
        // Fire another scroll event to trigger the infinite scroll
        fireEvent.scroll(window, { target: {} });

        // Wait for the changes to take effect
        await waitFor(() => result.current.feedListing.length === targetCount);

        // Make sure we have 5 placeholders added
        const placeholders = filterPlaceholders(result.current.feedListing);
        expect(placeholders).toHaveLength(5);

        // Wait for the actual posts to be loaded
        await waitFor(
          () =>
            filterFullPosts(result.current.feedListing).length === targetCount
        );

        const fullPosts = filterFullPosts(result.current.feedListing);
        expect(fullPosts).toHaveLength(targetCount);

        expect(fullPosts).toMatchSnapshot();
      };

      // Verify that 10 posts get loaded
      await loadNext(10);

      // Verify that 15 posts get loaded
      await loadNext(15);
    });
  });

  it("loads feed pages on init if needed without waiting for a scroll event", async () => {
    expect.assertions(1);

    // Mock the useRef to pretend that the element is fully viisble on screen
    mockedReact.useRef.mockImplementation(() => ({
      current: {
        getBoundingClientRect: () => ({
          bottom: 1, // Pretend that the bottom is visible
          top: 0,
        }),
      },
    }));

    await act(async () => {
      const { result, waitFor } = renderHook(
        () => useInfiniteFeed(startPageContext),
        {
          wrapper,
        }
      );

      // Check that the next page(s) have been loaded
      await waitFor(
        () => filterFullPosts(result.current.feedListing).length > 5
      );

      expect(result.current.feedListing.length).toBeGreaterThan(10);
    });
  });
});
