import * as React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";

import { post } from "../../../test/sampleData";

import ArticleInfo from "./index";

describe("component ArticleInfo", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const { asFragment } = render(<ArticleInfo post={post} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly without category", () => {
    expect.assertions(1);
    const { asFragment } = render(
      <ArticleInfo post={{ ...post, category: undefined }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
