import React from "react";
import { render } from "@testing-library/react";
import ListingPage from "./listing";
import ConfigContext from "../context/ConfigContext";
import config from "../../config";

import { listingQuery } from "../../test/sampleData";

const renderPaging = (postsPerPage = 3, currentPage = 1) => {
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

  return render(
    <ConfigContext.Provider value={{ ...config, postsPerPage }}>
      <ListingPage
        pageContext={pageContext}
        data={data as GatsbyTypes.ListingQueryQuery}
      />
    </ConfigContext.Provider>
  );
};

describe("page component ListingPage", () => {
  it("renders correctly with paging", () => {
    expect.assertions(3);

    const firstPage = renderPaging(3, 1);
    expect(firstPage.asFragment()).toMatchSnapshot();

    const secondPage = renderPaging(3, 2);
    expect(secondPage.asFragment()).toMatchSnapshot();

    const lastPage = renderPaging(3, 3);
    expect(lastPage.asFragment()).toMatchSnapshot();
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
