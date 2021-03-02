import React from "react";
import { render } from "@testing-library/react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTags from "./PostTags";

jest.mock("gatsby");

describe("component PostTags", () => {
  it("renders tag links", () => {
    expect.assertions(3); // 2 test tags and one Link invocation amount check

    const tags = ["test1", "test2"];

    const { getByRole } = render(<PostTags tags={tags} />);
    tags.forEach((tag) => {
      const tagLink = getByRole("button", { name: tag }).closest("a");

      expect(tagLink).toHaveAttribute("href", `/tags/${_.kebabCase(tag)}`);
    });

    expect(Link.mock.calls).toHaveLength(tags.length);
  });
});
