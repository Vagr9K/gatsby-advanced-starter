import React from "react";
import { Helmet } from "react-helmet";

import PostTemplate from "../index";

import { FeedPageMetaFromJson } from "../../../types";
import { PageContext } from "../types";
import Index0 from "../../../../../test/fixtures/feedMetadata/index-0.json";
import renderWithQueryClient from "../../../../test/render";

jest.mock("../../../config/useConfig");

const indexFeedContext: PageContext = {
  feedId: "test",
  feedPageMeta: Index0 as unknown as FeedPageMetaFromJson,
  feedType: "index",
  pageCount: 3,
  pageIndex: 0,
};

const categoryFeedContext: PageContext = {
  feedId: "test",
  feedPageMeta: Index0 as unknown as FeedPageMetaFromJson,
  feedType: "category",
  pageCount: 3,
  pageIndex: 0,
};

const tagFeedContext: PageContext = {
  feedId: "test",
  feedPageMeta: Index0 as unknown as FeedPageMetaFromJson,
  feedType: "tag",
  pageCount: 3,
  pageIndex: 0,
};

describe("component FeedTemplate", () => {
  it("correctly renders an index feed", () => {
    expect.assertions(1);

    const { asFragment } = renderWithQueryClient(
      <PostTemplate pageContext={indexFeedContext} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("correctly render a tag feed", () => {
    expect.assertions(2);

    const { asFragment } = renderWithQueryClient(
      <PostTemplate pageContext={tagFeedContext} />
    );

    const helmet = Helmet.peek();

    expect(helmet.title).toBe(
      'Posts tagged as "test" | Gatsby Advanced Starter'
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("correctly render a category feed", () => {
    expect.assertions(2);

    const { asFragment } = renderWithQueryClient(
      <PostTemplate pageContext={categoryFeedContext} />
    );

    const helmet = Helmet.peek();

    expect(helmet.title).toBe(
      'Posts in category "test" | Gatsby Advanced Starter'
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
