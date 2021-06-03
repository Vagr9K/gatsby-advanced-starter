import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { PostListing } from ".";
import { postListing } from "../../../test/sampleData";

describe("component PostListing", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const { asFragment } = render(<PostListing listing={postListing} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
