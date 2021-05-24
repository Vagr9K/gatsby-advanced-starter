import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts";
import { PostListing } from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";
import { queryIntoListing } from "../types";

const ListingContainer = styled.div`
  min-height: 100%;
  min-width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PostsContainer = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

type ListingProps = {
  data: GatsbyTypes.ListingQueryQuery;
  pageContext: {
    currentPageNum: number;
    pageCount: number;
  };
};

const Listing = ({ pageContext, data }: ListingProps): JSX.Element => {
  const config = useContext(ConfigContext);

  function renderPaging() {
    if (!config.postsPerPage) return null;

    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount).keys()].map((index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  return (
    <Layout>
      <ListingContainer>
        <PostsContainer>
          <PostListing listing={queryIntoListing(data)} />
        </PostsContainer>
        {renderPaging()}
      </ListingContainer>
    </Layout>
  );
};

export default Listing;

export const listingQuery = graphql`
  query ListingQuery($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: [frontmatter___datePublished], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          body
          excerpt
          timeToRead
          frontmatter {
            title
            description
            cover
            coverAlt
            tags
            category
            datePublished
            dateModified
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
