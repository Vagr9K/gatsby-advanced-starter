import React from "react";
import { render } from "@testing-library/react";
import TagPage from "./tag";
import ConfigContext from "../context/ConfigContext";

const { allMdx } = require("../../test/sampleData");

describe("page component TagPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { tag: "test-tag" };
    const data = {
      allMdx,
    };

    const { asFragment } = render(
      <ConfigContext.Provider value={{ website: { title: "TEST TITLE" } }}>
        <TagPage pageContext={pageContext} data={data} />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
