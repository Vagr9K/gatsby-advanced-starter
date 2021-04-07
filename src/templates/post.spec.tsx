import React from "react";
import cloneDeep from "clone-deep";

import { render } from "@testing-library/react";
import PostPage from "./post";

import { postQuery } from "../../test/sampleData";
import { MdxNode } from "../types";

describe("page component PostPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const pageContext = { slug: "test-slug" };

    const { asFragment } = render(
      <PostPage pageContext={pageContext} data={postQuery} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("throws error when no body is supplied", () => {
    expect.assertions(1);

    const pageContext = { slug: "test-slug" };

    const emptyPost = cloneDeep(postQuery);
    const newMdx: MdxNode = emptyPost.mdx || {};
    newMdx.body = undefined;
    const emptyPostQuery = { mdx: newMdx };

    const throwingFn = () =>
      PostPage({
        pageContext,
        data: emptyPostQuery as GatsbyTypes.BlogPostBySlugQuery,
      });
    const errorMessage = `PostTemplate: post date doesn't contain MDX body for rendering. Aborting. Post slug: test-slug`;

    expect(throwingFn).toThrow(errorMessage);
  });
});
