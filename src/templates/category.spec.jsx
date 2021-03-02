import React from "react";
import { render } from "@testing-library/react";
import CategoryPage from "./category";

const { allMarkdownRemark } = require("../../test/sampleData");

describe("page component CategoryPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { category: "test-cat" };
    const data = {
      allMarkdownRemark,
    };

    const { asFragment } = render(
      <CategoryPage pageContext={pageContext} data={data} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
