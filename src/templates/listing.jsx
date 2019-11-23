import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {

    // Pagination
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    // return (
    //   <div className="paging-container">
    //     {!isFirstPage && <Link to={prevPage}>Previous</Link>}
    //     {[...Array(pageCount)].map((_val, index) => {
    //       const pageNum = index + 1;
    //       return (
    //         <Link
    //           key={`listing-page-${pageNum}`}
    //           to={pageNum === 1 ? "/" : `/${pageNum}/`}
    //         >
    //           {pageNum}
    //         </Link>
    //       );
    //     })}
    //     {!isLastPage && <Link to={nextPage}>Next</Link>}
    //   </div>
    // );
  }
// 

  render() {
    const postEdges = this.props.data.ListingQuery.edges;
    const postEdgesDirectory = this.props.data.directoryListingQuery.edges;
    const postEdgesDirectoryA = this.props.data.directoryListingQuery.edges;

    return (
      <Layout>
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <DirectoryListing postEdgesDirectory={postEdgesDirectory} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryA} />
            <PostListing postEdges={postEdges} />
          </div>
          {this.renderPaging()}
        </div>
      </Layout>
    );
  }
}

export default Listing;

<<<<<<< HEAD
<<<<<<< HEAD
=======

// Directory --
// For use on directory listings, copy this page and cange the query to this
// Pull detail bits from the deeper post page, into the directory listing
// rm link to the slug page with it's website frontmatter piece
// sort: { fields: frontmatter___title, order: ASC }

>>>>>>> init with MD all the way
=======
>>>>>>> tryin
/* eslint no-undef: "off" */
export const listingQuery = graphql` {
  ListingQuery: 
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: {category: {ne: "directory"}}}
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    directoryListingQuery: 
        allMarkdownRemark(
          sort: { fields: frontmatter___title, order: ASC }
          filter: {frontmatter: {category: {eq: "directory"}}}
        ) {
          edges {
            node {
              frontmatter {
                title
                website
                twit
                inst
                category
                tags
              }
            }
          }
        }
        directoryListingQueryA: 
        allMarkdownRemark(
          sort: { fields: frontmatter___title, order: ASC }
          filter: {frontmatter: {category: {eq: "A"}}}
        ) {
          edges {
            node {
              frontmatter {
                title
                website
                twit
                inst
                category
                tags
              }
            }
          }
        }
    }
`;
