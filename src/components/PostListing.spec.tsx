import React from "react";
import { mocked } from "ts-jest/utils";
import { render } from "@testing-library/react";
import { Link } from "gatsby";
import { PostListing } from "./PostListing";
import * as sampleData from "../../test/sampleData";

jest.mock("gatsby");
const mockedLink = mocked(Link, true);

const postCount = 2;
const testListing = sampleData.postListing.slice(0, postCount);

describe("component PostListing", () => {
  it("renders post links correctly", () => {
    expect.assertions(3); // 2 href checks and one Link invocation amount check

    const { getByText } = render(<PostListing listing={testListing} />);

    testListing.forEach((post) => {
      const postLink = getByText(post.title).closest("a");

      expect(postLink).toHaveAttribute("href", post.slug);
    });

    expect(mockedLink.mock.calls).toHaveLength(postCount);
  });
});
