/* eslint-disable no-console */

import React from "react";
import { Helmet } from "react-helmet";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import { Types } from "gatsby-theme-advanced";

import PostTemplate from "./index";

import { post as postFixture, postQuery } from "../../../../../test/fixtures";

const postFromJson = JSON.parse(
  JSON.stringify(postFixture)
) as Types.PostFromJson;

const postData = postQuery;

const pageContext = {
  relatedPosts: [postFromJson, { ...postFromJson, slug: "/some-other-slug" }], // Change slug to prevent duplicate key errors
};

const originalError = console.error.bind(console.error);

describe("page template PostTemplate", () => {
  // Ignore validateDOMNesting errors
  // They are cause by the markdown content rendering and are irrelevant to our tests
  beforeAll(() => {
    console.error = (msg) =>
      !msg.toString().includes("Warning: validateDOMNesting") && //eslint-disable-line
      originalError(msg);
  });
  afterAll(() => {
    console.error = originalError;
  });

  it("renders SEO tags", () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    const helmet = Helmet.peek();

    expect(helmet.metaTags).toStrictEqual(
      expect.arrayContaining([
        {
          content:
            "https://gatsby-advanced-starter-demo.netlify.com/blog/big-sample-test",
          property: "og:url",
        },
      ])
    );
  });

  it("sets the correct title", () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    const helmet = Helmet.peek();

    expect(helmet.title).toBe("Big Test");
  });

  it("renders the layout component", async () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    // Verify that a footer segment exists, which indicates that the layout was included.
    const copyrightNotice = await screen.findByText(
      "© Copyright 2021 | Ruben Harutyunyan"
    );

    expect(copyrightNotice).toBeInTheDocument();
  });

  it("renders the article", async () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    const article = await screen.findByRole("article");

    expect(article).toBeInTheDocument();
  });

  it("renders the author segment", async () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    const authorSegment = await screen.findByText("First Last");

    expect(authorSegment).toBeInTheDocument();
  });

  it("renders the related posts", async () => {
    expect.assertions(1);

    render(<PostTemplate data={postData} pageContext={pageContext} />);

    const relatedPosts = await screen.findByText("RELATED POSTS");

    expect(relatedPosts).toBeInTheDocument();
  });
});
