import React from "react";
import { mocked } from "ts-jest/utils";
import "jest-styled-components";
import { screen, render } from "@testing-library/react";
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

    render(<PostListing listing={testListing} />);

    testListing.forEach((post) => {
      const postLink = screen.getByRole("link", { name: post.title });

      expect(postLink).toHaveAttribute("href", post.slug);
    });

    expect(mockedLink.mock.calls).toHaveLength(postCount);
  });
});
