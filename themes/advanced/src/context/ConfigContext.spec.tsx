import { mocked } from "ts-jest/utils";
import * as gatsby from "gatsby";

import { ConfigProvider } from "./ConfigContext";

import { config } from "../../../test/fixtures";
import { SiteConfig } from "../config";

const siteConfigQueryResponse = {
  site: {
    siteMetadata: {
      config,
    },
  },
};

jest.mock("gatsby", () => {
  const realGatsby = jest.requireActual<typeof gatsby>("gatsby");

  return {
    ...realGatsby,
    useStaticQuery: jest.fn(),
    graphql: jest.fn(),
  };
});

const mockedGatsby = mocked(gatsby, true);

describe("context ConfigContext", () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("correctly queries and provides configuration information", () => {
    expect.assertions(3);

    mockedGatsby.useStaticQuery.mockImplementation(
      () => siteConfigQueryResponse
    );

    const ret: { props: { value?: SiteConfig } } = ConfigProvider({
      children: null,
    });

    expect(mockedGatsby.graphql).toHaveBeenCalledTimes(1);
    expect(mockedGatsby.useStaticQuery).toHaveBeenCalledTimes(1);

    expect(ret.props.value).toBe(config);
  });

  it("throws an error if configuration is not set", () => {
    expect.assertions(3);

    mockedGatsby.useStaticQuery.mockImplementation(() => ({ site: undefined }));

    const throwFunc = () => ConfigProvider({ children: null });

    expect(throwFunc).toThrow("ConfigProvider: Failed to query SiteConfig.");

    expect(mockedGatsby.graphql).toHaveBeenCalledTimes(1);
    expect(mockedGatsby.useStaticQuery).toHaveBeenCalledTimes(1);
  });
});
