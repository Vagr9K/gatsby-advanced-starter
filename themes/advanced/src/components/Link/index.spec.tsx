import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import cloneDeep from "clone-deep";
import { mocked } from "ts-jest/utils";

import * as gatsby from "gatsby";

import Link from "./index";
import ConfigContext from "../../context/ConfigContext";
import { defaultConfig, SiteConfig } from "../../config";

const testConfig = cloneDeep<SiteConfig>(defaultConfig);
testConfig.basePath = "/";

jest.mock("gatsby", () => {
  const realGatsby = jest.requireActual<typeof gatsby>("gatsby");

  return {
    ...realGatsby,
    Link: jest
      .fn()
      .mockImplementation((props) => <realGatsby.Link {...props} />), // eslint-disable-line react/jsx-props-no-spreading
  };
});

const mockedGatsby = mocked(gatsby, true);

const renderWithContext = (
  linkElement: React.ReactNode,
  context = testConfig
) =>
  render(
    <ConfigContext.Provider value={context}>
      {linkElement}
    </ConfigContext.Provider>
  );

describe("component Link", () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders local links via GatsbyLink", () => {
    expect.assertions(2);

    renderWithContext(<Link to="/local/path">Test</Link>);

    expect(mockedGatsby.Link).toHaveBeenCalledTimes(1);

    expect(mockedGatsby.Link).toHaveBeenCalledWith(
      expect.objectContaining({ to: "/local/path" }),
      expect.anything()
    );
  });

  it("renders external links via an HTML element", () => {
    expect.assertions(2);

    renderWithContext(<Link to="https://example.com/local/path">Test</Link>);

    expect(mockedGatsby.Link).toHaveBeenCalledTimes(0);

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute(
      "href",
      "https://example.com/local/path"
    );
  });

  it("renders children prop", () => {
    expect.assertions(2);

    // If there is no link with "Test" in the name, then the "children" prop has not been rendered

    // For external URLs
    renderWithContext(<Link to="https://example.com/local/path">Test</Link>);

    expect(screen.getByRole("link", { name: "Test" })).toBeInTheDocument();

    cleanup();

    // For internal URLs
    renderWithContext(<Link to="/local/path">Test</Link>);

    expect(screen.getByRole("link", { name: "Test" })).toBeInTheDocument();
  });

  it("adds basePath to local URLs", () => {
    expect.assertions(3);

    // basePath should be added to local urls
    const configWithBasePath = cloneDeep(testConfig);
    configWithBasePath.basePath = "/base/path";

    renderWithContext(<Link to="/local/path">Test</Link>, configWithBasePath);

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute(
      "href",
      "/base/path/local/path"
    );

    cleanup();

    // basePath should not be added to local urls that have 'noBasePath' set
    configWithBasePath.basePath = "/base/path";

    renderWithContext(
      <Link to="/local/path" noBasePath>
        Test
      </Link>,
      configWithBasePath
    );

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute(
      "href",
      "/local/path"
    );

    cleanup();

    // No basePath should be added to external urls
    renderWithContext(
      <Link to="https://example.com/local/path">Test</Link>,
      configWithBasePath
    );

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute(
      "href",
      "https://example.com/local/path"
    );
  });

  it("prioritizes 'href' url over 'to' url", () => {
    expect.assertions(1);

    renderWithContext(
      <Link href="/correct/local/path" to="/incorrect/local/path">
        Test
      </Link>
    );

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute(
      "href",
      "/correct/local/path"
    );
  });

  it("passes down 'activeClassName' to GatsbyLink", () => {
    expect.assertions(2);

    renderWithContext(
      <Link activeClassName="test-active-class" to="/local/path">
        Test
      </Link>
    );

    expect(mockedGatsby.Link).toHaveBeenCalledTimes(1);

    expect(mockedGatsby.Link).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "/local/path",
        activeClassName: "test-active-class",
      }),
      expect.anything()
    );
  });

  it("passes down className and aria-label attributes", () => {
    expect.assertions(4);

    // For local URLs
    renderWithContext(
      <Link
        activeClassName="test-active-class"
        ariaLabel="test-label"
        to="/local/path"
      >
        Test
      </Link>
    );

    // Make sure GatsbyLink received the activeClassName prop
    expect(mockedGatsby.Link).toHaveBeenCalledTimes(1);
    expect(mockedGatsby.Link).toHaveBeenCalledWith(
      expect.objectContaining({
        activeClassName: "test-active-class",
        "aria-label": "test-label",
      }),
      expect.anything()
    );

    // Make sure the aria-label is set
    expect(screen.getByRole("link", { name: "test-label" })).toHaveAttribute(
      "aria-label",
      "test-label"
    );

    cleanup();

    // For external URLs
    renderWithContext(
      <Link
        activeClassName="test-active-class"
        ariaLabel="test-label"
        to="https://example.com/local/path"
      >
        Test
      </Link>
    );

    // Make sure the aria-label is set
    expect(screen.getByRole("link", { name: "test-label" })).toHaveAttribute(
      "aria-label",
      "test-label"
    );
  });
});
