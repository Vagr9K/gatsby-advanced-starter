import React from "react";
import { render } from "@testing-library/react";
import PostPage from "./post";

const { markdownRemark } = require("../../test/sampleData");

describe("page component PostPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { slug: "test-slug" };
    const data = {
      markdownRemark,
    };

    const { asFragment } = render(
      <PostPage pageContext={pageContext} data={data} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

// TODO: make sure we have componenents
