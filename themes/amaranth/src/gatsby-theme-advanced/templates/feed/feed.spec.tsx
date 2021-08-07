/* eslint-disable no-console */

import React from "react";
import { Helmet } from "react-helmet";
import { cleanup, screen } from "@testing-library/react";
import "jest-styled-components";

import { Types, FeedTemplateContext } from "gatsby-theme-advanced";

import PostTemplate from "./index";

import Index0 from "../../../../../test/fixtures/feedMetadata/index-0.json";

import renderWithQueryClient from "../../../../../advanced/test/render";

const indexFeedContext = {
  feedId: undefined,
  feedPageMeta: Index0 as unknown as Types.FeedPageMetaFromJson,
  feedType: "index",
  pageCount: 3,
  pageIndex: 0,
};

const categoryFeedContext = {
  feedId: "test",
  feedPageMeta: Index0 as unknown as Types.FeedPageMetaFromJson,
  feedType: "category",
  pageCount: 3,
  pageIndex: 0,
};

const tagFeedContext = {
  feedId: "test",
  feedPageMeta: Index0 as unknown as Types.FeedPageMetaFromJson,
  feedType: "tag",
  pageCount: 3,
  pageIndex: 0,
};

describe("page template FeedTemplate", () => {
  it("sets the correct title", () => {
    expect.assertions(3);

    const testTitle = (context: FeedTemplateContext, expectedTitle: string) => {
      renderWithQueryClient(<PostTemplate pageContext={context} />);

      const helmet = Helmet.peek();

      expect(helmet.title).toStrictEqual(expectedTitle);

      cleanup();
    };

    testTitle(indexFeedContext, "Gatsby Advanced Starter");
    testTitle(
      categoryFeedContext,
      'Posts in category "test" | Gatsby Advanced Starter'
    );
    testTitle(
      tagFeedContext,
      'Posts tagged as "test" | Gatsby Advanced Starter'
    );
  });

  it("renders feed posts", async () => {
    expect.assertions(5);

    renderWithQueryClient(<PostTemplate pageContext={indexFeedContext} />);

    const article1 = await screen.findByText("Big Test");
    expect(article1).toBeInTheDocument();

    const article2 = await screen.findByText("Storms of Doors");
    expect(article2).toBeInTheDocument();

    const article3 = await screen.findByText("The Darkest Something");
    expect(article3).toBeInTheDocument();

    const article4 = await screen.findByText("Valley in the Storms");
    expect(article4).toBeInTheDocument();

    const article5 = await screen.findByText("Flames in the Time");
    expect(article5).toBeInTheDocument();
  });
});
