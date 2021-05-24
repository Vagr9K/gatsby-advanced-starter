import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import CategoryPage from "./category";

import { listingQuery } from "../../test/sampleData";

describe("page component CategoryPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { category: "test-cat" };

    const { asFragment } = render(
      <CategoryPage
        pageContext={pageContext}
        data={listingQuery as GatsbyTypes.CategoryPageQuery}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
