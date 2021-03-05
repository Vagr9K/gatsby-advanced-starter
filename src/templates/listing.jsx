import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts";
import PostListing from "../components/PostListing";
import ConfigContext from "../context/ConfigContext";
import "./listing.css";

function Listing({ pageContext, data }) {
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
        {[...Array(pageCount)].map((_val, index) => {
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

  const postEdges = data.allMdx.edges;

  return (
    <Layout>
      <div className="listing-container">
        <div className="posts-container">
          <PostListing postEdges={postEdges} />
        </div>
        {renderPaging()}
      </div>
    </Layout>
  );
}

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
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            datePublished
            dateModified
          }
        }
      }
    }
  }
`;
