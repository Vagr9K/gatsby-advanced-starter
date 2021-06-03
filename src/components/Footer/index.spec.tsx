import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";

import Footer from "./index";

import ConfigContext from "../../context/ConfigContext";
import config from "../../config";

jest.mock("../config");

describe("component Footer", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <Footer />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
