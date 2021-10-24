import React from "react";
import { Helmet } from "react-helmet";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import AboutPage from "./about";

describe("page component AboutPage", () => {
  it("renders the layout component", async () => {
    expect.assertions(1);

    render(<AboutPage />);

    // Verify that a footer segment exists, which indicates that the layout was included.
    const copyrightNotice = await screen.findByText(
      "© Copyright 2021 | Ruben Harutyunyan"
    );

    expect(copyrightNotice).toBeInTheDocument();
  });

  it("sets the correct title", () => {
    expect.assertions(1);

    render(<AboutPage />);

    const helmet = Helmet.peek();

    expect(helmet.title).toBe("About | Gatsby Advanced Starter");
  });
});
