import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { mocked } from "ts-jest/utils";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "./index";

import { config as configFixture } from "../../../../test/fixtures";

const mockedUseConfig = mocked(useConfig);

describe("component UserLinks", () => {
  it("renders user links", async () => {
    expect.assertions(4);

    render(<UserLinks />);

    const twitterLink = await screen.findByRole("link", {
      name: "Twitter Profile",
    });
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/Vagr9K");

    const githubLink = await screen.findByRole("link", {
      name: "GitHub Profile",
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/vagr9k");

    const linkedInLink = await screen.findByRole("link", {
      name: "LinkedIn Profile",
    });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/your-linkedin"
    );

    const eMailLink = await screen.findByRole("link", { name: "E-Mail" });
    expect(eMailLink).toHaveAttribute(
      "href",
      "mailto:AdvancedUser@example.com"
    );
  });

  it("renders RSS link when includeRss is passed", async () => {
    expect.assertions(1);

    render(<UserLinks includeRss />);

    const rssLink = await screen.findByRole("link", { name: "RSS Feed" });
    expect(rssLink).toHaveAttribute("href", "/rss.xml");
  });

  it("doesn't render RSS link when includeRss is not passed", () => {
    expect.assertions(1);

    render(<UserLinks />);

    const rssLink = screen.queryByRole("link", { name: "RSS Feed" });
    expect(rssLink).not.toBeInTheDocument();
  });

  it("returns null when user information is missing", () => {
    expect.assertions(1);

    mockedUseConfig.mockReturnValue({
      ...configFixture,
      user: undefined,
    });

    const { container } = render(<UserLinks includeRss />);

    expect(container).toBeEmptyDOMElement();
  });
});
