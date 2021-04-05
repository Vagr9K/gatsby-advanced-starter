import React from "react";
import { render } from "@testing-library/react";
import SocialLinks from "./SocialLinks";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

describe("component SocialLinks", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks
          postTitle="testTitle"
          postSlug="/test-post"
          postExcerpt="testExcerpt"
          mobile={false}
        />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly on mobile", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <SocialLinks
          postTitle="testTitle"
          postSlug="/test-post"
          postExcerpt="testExcerpt"
          mobile
        />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
