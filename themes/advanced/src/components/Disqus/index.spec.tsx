import React from "react";
import { render } from "@testing-library/react";
import cloneDeep from "clone-deep";

import Disqus from "./index";
import ConfigContext from "../../context/ConfigContext";
import { defaultConfig } from "../../config";

import { post } from "../../../../test/fixtures";

describe("component Disqus", () => {
  it("renders correctly when config.disqusShortname is set", () => {
    expect.assertions(1);

    const newConfig = cloneDeep(defaultConfig);
    newConfig.website.disqusShortname =
      "https-vagr9k-github-io-gatsby-advanced-starter";

    const { asFragment } = render(
      <ConfigContext.Provider value={newConfig}>
        <Disqus post={post} />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when config.disqusShortname is not set", () => {
    expect.assertions(1);

    const newConfig = cloneDeep(defaultConfig);
    newConfig.website.disqusShortname = undefined;

    const { asFragment } = render(
      <ConfigContext.Provider value={newConfig}>
        <Disqus post={post} />
      </ConfigContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
