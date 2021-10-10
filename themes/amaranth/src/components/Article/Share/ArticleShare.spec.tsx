/* eslint-disable testing-library/no-node-access, testing-library/no-container */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

import ArticleShare from "./index";

import { post as postFixture } from "../../../../../test/fixtures";

const mockNavigator = () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.spyOn(navigator.clipboard, "writeText");
};

describe("component ArticleShare", () => {
  beforeAll(() => {
    mockNavigator();
  });

  it("renders social links", () => {
    expect.assertions(5);

    const { container } = render(<ArticleShare post={postFixture} />);

    const facebookButton = container.querySelector(
      'button[aria-label="facebook"]'
    );
    expect(facebookButton).toBeInTheDocument();

    const twitterButton = container.querySelector(
      'button[aria-label="twitter"]'
    );
    expect(twitterButton).toBeInTheDocument();

    const redditButton = container.querySelector('button[aria-label="reddit"]');
    expect(redditButton).toBeInTheDocument();

    const linkedinButton = container.querySelector(
      'button[aria-label="linkedin"]'
    );
    expect(linkedinButton).toBeInTheDocument();

    const linkButton = container.querySelector("div > svg");
    expect(linkButton).toBeInTheDocument();
  });

  it("renders a popup notification when user clicks the post url copy button", async () => {
    expect.assertions(3);

    const { container } = render(<ArticleShare post={postFixture} />);

    const linkButton = container.querySelector("div > svg");
    expect(linkButton).toBeInTheDocument();

    userEvent.click(linkButton as SVGSVGElement);

    const popUpNotification = await screen.findByText(
      "Link copied to clipboard"
    );
    expect(popUpNotification).toBeInTheDocument();

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
  });
});
