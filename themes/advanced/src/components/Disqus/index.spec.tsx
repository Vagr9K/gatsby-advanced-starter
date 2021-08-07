import React from "react";
import { render } from "@testing-library/react";
import cloneDeep from "clone-deep";
import { mocked } from "ts-jest/utils";

import Disqus from "./index";
import { useConfig } from "../../config";

import { post, config as configFixture } from "../../../../test/fixtures";

jest.mock("../../config/useConfig");

const mockedUseConfig = mocked(useConfig);

describe("component Disqus", () => {
  it("renders correctly when config.disqusShortname is set", () => {
    expect.assertions(1);

    const newConfig = cloneDeep(configFixture);
    newConfig.website.disqusShortname =
      "https-vagr9k-github-io-gatsby-advanced-starter";

    mockedUseConfig.mockReturnValue(newConfig);

    const { asFragment } = render(<Disqus post={post} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when config.disqusShortname is not set", () => {
    expect.assertions(1);

    const newConfig = cloneDeep(configFixture);
    newConfig.website.disqusShortname = undefined;

    mockedUseConfig.mockReturnValue(newConfig);

    const { asFragment } = render(<Disqus post={post} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
