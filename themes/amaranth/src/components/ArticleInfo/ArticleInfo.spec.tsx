import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import ArticleInfo from "./index";

import { post as postFixture } from "../../../../test/fixtures";

describe("component ArticleInfo", () => {
  it("generates correct tag/category URLs", async () => {
    expect.assertions(3);

    render(<ArticleInfo post={postFixture} />);

    const categoryLink = await screen.findByRole("link", { name: "moar" });
    expect(categoryLink).toHaveAttribute("href", "/category/moar");

    const tagLink1 = await screen.findByRole("link", { name: "test" });
    expect(tagLink1).toHaveAttribute("href", "/tag/test");

    const tagLink2 = await screen.findByRole("link", { name: "huge" });
    expect(tagLink2).toHaveAttribute("href", "/tag/huge");
  });

  it("shows correct information span", async () => {
    expect.assertions(1);

    render(<ArticleInfo post={postFixture} />);

    const infoSpan = await screen.findByText("⋅ Mar 1, 2018 ⋅ 3 min read");
    expect(infoSpan).toBeInTheDocument();
  });
});
