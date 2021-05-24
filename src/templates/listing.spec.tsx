import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import ListingPage from "./listing";
import ConfigContext from "../context/ConfigContext";
import config from "../config";

import { listingQuery } from "../../test/sampleData";

const renderPage = (postsPerPage = 3, currentPage = 1) => {
  const pageCount = Math.ceil(listingQuery.allMdx.edges.length / postsPerPage);

  const pageContext = {
    limit: postsPerPage,
    skip: (currentPage - 1) * postsPerPage,
    pageCount,
    currentPageNum: currentPage,
  };
  const data = {
    allMdx: {
      edges: listingQuery.allMdx.edges.slice(
        pageContext.skip,
        pageContext.skip + pageContext.limit
      ),
    },
  };

  const view = render(
    <ConfigContext.Provider value={{ ...config, postsPerPage }}>
      <ListingPage
        pageContext={pageContext}
        data={data as GatsbyTypes.ListingQueryQuery}
      />
    </ConfigContext.Provider>
  );

  return view.asFragment();
};

describe("page component ListingPage", () => {
  it("renders correctly with paging", () => {
    expect.assertions(3);

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const firstPage = renderPage(3, 1);
    expect(firstPage).toMatchSnapshot();

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const secondPage = renderPage(3, 2);
    expect(secondPage).toMatchSnapshot();

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const lastPage = renderPage(3, 3);
    expect(lastPage).toMatchSnapshot();
  });

  it("renders correctly without paging", () => {
    expect.assertions(1);

    const pageContext = {
      limit: listingQuery.allMdx.edges.length,
      skip: 0,
      pageCount: 1,
      currentPageNum: 1,
    };
    const data = {
      allMdx: listingQuery.allMdx,
    };

    const { asFragment } = render(
      <ConfigContext.Provider value={{ ...config, postsPerPage: 0 }}>
        <ListingPage
          pageContext={pageContext}
          data={data as GatsbyTypes.ListingQueryQuery}
        />
      </ConfigContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
