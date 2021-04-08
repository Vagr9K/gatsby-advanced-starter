import React from "react";
import { render } from "@testing-library/react";
import Disqus from "./Disqus";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

jest.mock("../config");

describe("component Disqus", () => {
  it("renders correctly when config.disqusShortname is set", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <Disqus postTitle="testTitle" postSlug="testSlug" />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when config.disqusShortname is not set", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider
        value={{
          ...config,
          disqusShortname: undefined,
        }}
      >
        <Disqus postTitle="testTitle" postSlug="testSlug" />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
