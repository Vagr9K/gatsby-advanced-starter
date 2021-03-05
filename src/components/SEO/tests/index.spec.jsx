import SEO from "../index";

import { mdx } from "../../../../test/sampleData";

jest.mock("react", () => {
  const config = require("../../../../data/SiteConfig"); // eslint-disable-line global-require
  const realReact = jest.requireActual("react");
  return {
    ...realReact,
    useContext: () => config,
  };
});

describe("component SEO", () => {
  it("renders correctly on article pages", () => {
    expect.assertions(1);

    const postNode = mdx;
    const seoData = SEO({ postNode });

    expect(seoData).toMatchSnapshot();
  });

  it("renders correctly on website pages", () => {
    expect.assertions(1);

    const seoData = SEO({ postNode: null });

    expect(seoData).toMatchSnapshot();
  });
});
