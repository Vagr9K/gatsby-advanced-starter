import React from "react";
import { render } from "@testing-library/react";
import Disqus from "./Disqus";
import ConfigContext from "../context/ConfigContext";
import config from "../../data/SiteConfig";

jest.mock("../../data/SiteConfig");
const { allMdx } = require("../../test/sampleData");

describe("component Disqus", () => {
  it("renders correctly when config.disqusShortname is set", () => {
    expect.assertions(1);

    const postNode = allMdx.edges[0].node;

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <Disqus postNode={postNode} />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when config.disqusShortname is not set", () => {
    expect.assertions(1);

    const postNode = allMdx.edges[0].node;

    const { asFragment } = render(
      <ConfigContext.Provider
        value={{
          disqusShortname: null,
        }}
      >
        <Disqus postNode={postNode} />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
