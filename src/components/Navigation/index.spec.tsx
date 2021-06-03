import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";

import Navigation from ".";

import ConfigContext from "../../context/ConfigContext";
import config from "../../config";

jest.mock("../../config");

describe("component Navigation", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <Navigation />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
