import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext;
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

  render() {

    // this can be refactored as a variable based approach, and only one graphql query
    const postEdges = this.props.data.ListingQuery.edges;
    const postEdgesDirectoryA = this.props.data.directoryListingQueryA.edges;
    const postEdgesDirectoryB = this.props.data.directoryListingQueryB.edges;
    const postEdgesDirectoryC = this.props.data.directoryListingQueryC.edges;
    const postEdgesDirectoryD = this.props.data.directoryListingQueryD.edges;
    const postEdgesDirectoryE = this.props.data.directoryListingQueryE.edges;
    const postEdgesDirectoryF = this.props.data.directoryListingQueryF.edges;
    const postEdgesDirectoryG = this.props.data.directoryListingQueryG.edges;
    const postEdgesDirectoryH = this.props.data.directoryListingQueryH.edges;
    const postEdgesDirectoryI = this.props.data.directoryListingQueryI.edges;
    const postEdgesDirectoryJ = this.props.data.directoryListingQueryJ.edges;
    const postEdgesDirectoryK = this.props.data.directoryListingQueryK.edges;
    const postEdgesDirectoryL = this.props.data.directoryListingQueryL.edges;
    const postEdgesDirectoryM = this.props.data.directoryListingQueryM.edges;
    const postEdgesDirectoryN = this.props.data.directoryListingQueryN.edges;
    const postEdgesDirectoryO = this.props.data.directoryListingQueryO.edges;
    const postEdgesDirectoryP = this.props.data.directoryListingQueryP.edges;
    const postEdgesDirectoryQ = this.props.data.directoryListingQueryQ.edges;
    const postEdgesDirectoryR = this.props.data.directoryListingQueryR.edges;
    const postEdgesDirectoryS = this.props.data.directoryListingQueryS.edges;
    const postEdgesDirectoryT = this.props.data.directoryListingQueryT.edges;
    const postEdgesDirectoryU = this.props.data.directoryListingQueryU.edges;
    const postEdgesDirectoryV = this.props.data.directoryListingQueryV.edges;
    const postEdgesDirectoryW = this.props.data.directoryListingQueryW.edges;
    const postEdgesDirectoryX = this.props.data.directoryListingQueryX.edges;
    const postEdgesDirectoryY = this.props.data.directoryListingQueryY.edges;
    const postEdgesDirectoryZ = this.props.data.directoryListingQueryZ.edges;
    

    return (
      <Layout>
        <div className="container">
          <Helmet title={config.siteTitle} />
          <SEO />

          <div className="title">
          </div>

          <div className="podcast">
            <PostListing postEdges={postEdges} />   
          </div>
            
            
           
          <div className="directory">
            {/* Add 26 queries, for each letter plus numbers */}
            {/* Or split into multiple 'directory' divs here */}
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryA} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryB} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryC} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryD} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryE} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryF} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryG} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryH} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryI} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryJ} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryK} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryL} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryM} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryN} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryO} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryP} />  
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryQ} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryR} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryS} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryT} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryU} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryV} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryW} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryX} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryY} />
            <DirectoryListing postEdgesDirectory={postEdgesDirectoryZ} />
          </div>
          {this.renderPaging()}
        </div>
      </Layout>
    );
  }
}

export default Listing;


// Directory --
// For use on directory listings, copy this page and cange the query to this
// Pull detail bits from the deeper post page, into the directory listing
// rm link to the slug page with it's website frontmatter piece
// sort: { fields: frontmatter___title, order: ASC }

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
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
  directoryListingQueryB: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "B"}}}
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
  directoryListingQueryC: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "C"}}}
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
  directoryListingQueryD: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "D"}}}
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
  directoryListingQueryE: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "E"}}}
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
  directoryListingQueryF: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "F"}}}
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
  directoryListingQueryG: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "G"}}}
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
  directoryListingQueryH: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "H"}}}
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
  directoryListingQueryI: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "I"}}}
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
  directoryListingQueryJ: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "J"}}}
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
  directoryListingQueryK: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "K"}}}
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
  directoryListingQueryL: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "L"}}}
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
  directoryListingQueryM: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "M"}}}
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
  directoryListingQueryN: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "N"}}}
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
  directoryListingQueryO: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "O"}}}
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
  directoryListingQueryP: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "P"}}}
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
  directoryListingQueryQ: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "Q"}}}
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
  directoryListingQueryR: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "R"}}}
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
  directoryListingQueryS: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "S"}}}
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
  directoryListingQueryT: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "T"}}}
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
  directoryListingQueryU: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "U"}}}
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
  directoryListingQueryV: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "V"}}}
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
  directoryListingQueryW: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "W"}}}
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
  directoryListingQueryX: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "X"}}}
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
  directoryListingQueryY: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "Y"}}}
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
  directoryListingQueryZ: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "Z"}}}
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
