import * as React from "react";
import SEO from "../index";
import { post } from "../../../../test/sampleData";
import config from "../../../config";

jest.mock("react", () => ({
  ...jest.requireActual<typeof React>("react"),
  useContext: () => config,
}));

describe("component SEO", () => {
  it("renders correctly on article pages", () => {
    expect.assertions(1);

    const seoData = SEO({ post });

    expect(seoData).toMatchSnapshot();
  });

  it("renders correctly on website pages", () => {
    expect.assertions(1);

    const seoData = SEO({});

    expect(seoData).toMatchSnapshot();
  });
});
