import * as React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";

import { post } from "../../../test/sampleData";

import ArticleCard from "./index";

describe("component ArticleCard", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const { asFragment } = render(<ArticleCard post={post} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly as a hero card", () => {
    expect.assertions(1);
    const { asFragment } = render(<ArticleCard post={post} hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
