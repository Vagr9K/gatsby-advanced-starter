import React from "react";
import { Helmet } from "react-helmet";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Layout from "./index";

describe("website layout", () => {
  it("renders SEO tags", () => {
    expect.assertions(1);

    render(<Layout />);

    const helmet = Helmet.peek();

    expect(helmet.metaTags).toStrictEqual(
      expect.arrayContaining([
        {
          name: "description",
          content: "A GatsbyJS starter equipped with advanced features.",
        },
      ])
    );
  });

  it("renders navigation section", async () => {
    expect.assertions(1);

    render(<Layout />);

    // Verify that a navigation component exists in the rendered layout
    const postsLink = screen.getByRole("link", { name: "Posts" });

    expect(postsLink).toBeInTheDocument();
  });

  it("renders footer section", async () => {
    expect.assertions(1);

    render(<Layout />);

    // Verify that a footer segment exists, which indicates that the footer is rendered
    const copyrightNotice = await screen.findByText(
      "© Copyright 2021 | Ruben Harutyunyan"
    );

    expect(copyrightNotice).toBeInTheDocument();
  });
});
