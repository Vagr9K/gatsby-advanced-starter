import { mocked } from "ts-jest/utils";
import { renderHook } from "@testing-library/react-hooks";
import * as gatsby from "gatsby";

import useConfig from "./useConfig";

import { config } from "../../../test/fixtures";

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

describe("hook useConfig", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("correctly queries and provides configuration information", () => {
    expect.assertions(3);

    mockedGatsby.useStaticQuery.mockImplementation(
      () => siteConfigQueryResponse
    );

    const { result } = renderHook(() => useConfig());

    expect(mockedGatsby.graphql).toHaveBeenCalledTimes(1);
    expect(mockedGatsby.useStaticQuery).toHaveBeenCalledTimes(1);

    expect(result.current).toBe(config);
  });

  it("throws an error if configuration is not set", () => {
    expect.assertions(3);

    mockedGatsby.useStaticQuery.mockImplementation(() => ({ site: undefined }));

    const { result } = renderHook(() => useConfig());

    expect(result.error).toBeDefined();

    expect(mockedGatsby.graphql).toHaveBeenCalledTimes(1);
    expect(mockedGatsby.useStaticQuery).toHaveBeenCalledTimes(1);
  });
});
