import SEO from "../index";
import { post } from "../../../../../test/fixtures";

jest.mock("../../../config/useConfig");

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
