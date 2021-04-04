import React from "react";
import { render } from "@testing-library/react";
import PostPage from "./post";

import { postQuery } from "../../test/sampleData";

describe("page component PostPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { slug: "test-slug" };

    const { asFragment } = render(
      <PostPage pageContext={pageContext} data={postQuery} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
