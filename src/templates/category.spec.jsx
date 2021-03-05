import React from "react";
import { render } from "@testing-library/react";
import CategoryPage from "./category";

const { allMdx } = require("../../test/sampleData");

describe("page component CategoryPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { category: "test-cat" };
    const data = {
      allMdx,
    };

    const { asFragment } = render(
      <CategoryPage pageContext={pageContext} data={data} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
