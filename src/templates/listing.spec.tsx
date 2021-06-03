import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import ListingPage from "./listing";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

import { listingQuery } from "../../test/sampleData";

describe("page component ListingPage", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const data = {
      allMdx: listingQuery.allMdx,
    };

    const { asFragment } = render(
      <ConfigContext.Provider value={{ ...config, postsPerPage: 0 }}>
        <ListingPage data={data as GatsbyTypes.ListingQueryQuery} />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
