import React from "react";
import { render } from "@testing-library/react";
import TagPage from "./tag";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

import { listingQuery } from "../../test/sampleData";

describe("page component TagPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { tag: "test-tag" };

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <TagPage
          pageContext={pageContext}
          data={listingQuery as GatsbyTypes.TagPageQuery}
        />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
