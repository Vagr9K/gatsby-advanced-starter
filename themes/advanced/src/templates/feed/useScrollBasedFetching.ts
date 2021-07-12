import React, { useEffect, useRef } from "react";
import { UseInfiniteQueryResult } from "react-query";

const useScrollBasedFetching = (
  feedQuery: UseInfiniteQueryResult
): React.RefObject<HTMLDivElement> => {
  // Ref to the listing wrapper element
  // Used to track scroll progress
  const feedElementRef = useRef<HTMLDivElement>(null);

  // Helpers for loading pages
  const loadNext = async () => {
    if (feedQuery.hasNextPage && !feedQuery.isFetchingNextPage) {
      await feedQuery.fetchNextPage();
    }
  };

  const loadPrev = async () => {
    if (feedQuery.hasPreviousPage && !feedQuery.isFetchingPreviousPage) {
      await feedQuery.fetchNextPage();
    }
  };

  const checkScrollState = async () => {
    if (feedElementRef.current) {
      // If we're on the bottom edge of the feed element, load next page
      if (
        feedElementRef.current.getBoundingClientRect().bottom <=
        window.innerHeight
      ) {
        await loadNext();
      }

      // If we're on the top edge of the feed element, load previous page
      if (feedElementRef.current.getBoundingClientRect().top > 0) {
        await loadPrev();
      }
    }
  };

  // Handle loading next/previous pages on scroll
  useEffect(() => {
    const onScroll = async (): Promise<void> => {
      await checkScrollState();
    };

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    window.addEventListener("scroll", onScroll);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      window.removeEventListener("scroll", onScroll);
    };
  });

  // Check state on rerenders
  // This prevents edge cases when no scrollbar is availble but all the data is already loaded

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  checkScrollState();

  return feedElementRef;
};

export default useScrollBasedFetching;
