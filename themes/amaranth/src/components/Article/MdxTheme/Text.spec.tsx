import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";

import { createHeadings } from "./Text";

describe("utility function createHeadings", () => {
  it("correctly generates linked heading components for markdown content", () => {
    expect.assertions(6);

    const headings = createHeadings("/test-slug");

    Object.values(headings).forEach((heading) => {
      const HeadingComponent = heading;

      render(<HeadingComponent>Test Heading</HeadingComponent>);

      const headingLink = screen.getByRole("link", {
        name: "Test Heading",
      });

      expect(headingLink).toHaveAttribute("href", "/test-slug#test-heading");

      cleanup();
    });
  });
});
