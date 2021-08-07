import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import SEO from "../../components/SEO";

import { post as postFixture, postQuery } from "../../../../test/fixtures";

import PostTemplate from "../post/index";
import { PostFromJson } from "../../types";

jest.mock("../../components/SEO", () => jest.fn().mockReturnValue(null));
const mockedSeo = mocked(SEO);

const postFromJson = JSON.parse(JSON.stringify(postFixture)) as PostFromJson;
const pageContext = {
  relatedPosts: [postFromJson, postFromJson],
};

describe("template Post", () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders properly", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <PostTemplate data={postQuery} pageContext={pageContext} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the SEO component", () => {
    expect.assertions(1);

    render(<PostTemplate data={postQuery} pageContext={pageContext} />);

    expect(mockedSeo).toHaveBeenCalledTimes(1);
  });
});
