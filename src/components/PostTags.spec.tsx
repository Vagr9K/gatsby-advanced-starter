import React from "react";
import { mocked } from "ts-jest/utils";
import { render } from "@testing-library/react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTags from "./PostTags";

jest.mock("gatsby");
const mockedLink = mocked(Link, true);

describe("component PostTags", () => {
  it("renders tag links", () => {
    expect.assertions(3); // 2 test tags and one Link invocation amount check

    const tags = ["test1", "test2"];

    const { getByRole } = render(<PostTags tags={tags} />);
    tags.forEach((tag) => {
      const tagLink = getByRole("button", { name: tag }).closest("a");

      expect(tagLink).toHaveAttribute("href", `/tags/${_.kebabCase(tag)}`);
    });

    expect(mockedLink.mock.calls).toHaveLength(tags.length);
  });
});
