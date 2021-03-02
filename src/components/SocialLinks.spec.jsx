import React from "react";
import { render } from "@testing-library/react";
import SocialLinks from "./SocialLinks";
import ConfigContext from "../context/ConfigContext";
import config from "../../data/SiteConfig";

const { allMarkdownRemark } = require("../../test/sampleData");

describe("component SocialLinks", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const postNode = allMarkdownRemark.edges[0].node;

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks postNode={postNode} postPath="/test-post" mobile={false} />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly on mobile", () => {
    expect.assertions(1);

    const postNode = allMarkdownRemark.edges[0].node;

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks postNode={postNode} postPath="/test-post" mobile />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
