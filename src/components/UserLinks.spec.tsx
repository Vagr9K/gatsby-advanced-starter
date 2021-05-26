import React from "react";
import "jest-styled-components";
import cloneDeep from "clone-deep";
import { render } from "@testing-library/react";

import UserLinks from "./UserLinks";

import ConfigContext from "../context/ConfigContext";
import config from "../config";

jest.mock("../config");

describe("component UserLinks", () => {
  it("renders correctly without the RSS icon", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with the RSS icon", () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ConfigContext.Provider value={config}>
        <UserLinks includeRss />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with no optional user data supplied", () => {
    expect.assertions(1);

    const strippedConfig = cloneDeep(config);
    strippedConfig.user.github = undefined;
    strippedConfig.user.linkedIn = undefined;
    strippedConfig.user.twitterName = undefined;

    const { asFragment } = render(
      <ConfigContext.Provider value={strippedConfig}>
        <UserLinks />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
