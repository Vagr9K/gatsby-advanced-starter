import * as React from "react";
import { render } from "@testing-library/react";
import AboutPage from "../about";

describe("page component AboutPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
