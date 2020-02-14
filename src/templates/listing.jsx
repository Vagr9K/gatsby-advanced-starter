import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Intro from "../components/Layout/Intro";
import Tagbox from "../components/Layout/Tagbox";
import PostListing from "../components/PostListing/PostListing";
import PostCats from "../components/Filters/PostCats";
import PostTags from "../components/Filters/PostTags";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";


class Listing extends React.Component {

    // Pagination
  // renderPaging() {
  //   const { currentPageNum, pageCount } = this.props.pageContext;
  //   const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
  //   const nextPage = `/${currentPageNum + 1}/`;
  //   const isFirstPage = currentPageNum === 1;
  //   const isLastPage = currentPageNum === pageCount;
  // }

  render() {

    // this can be refactored as a variable based approach, and only one graphql query
    // Look at the tags page for an example of this
    

    const postEdges = this.props.data.ListingQueryPodcast.edges;

    const allCats = this.props.data.AllCatsQuery.distinct;
    const allTags = this.props.data.AllTagsQuery.distinct;
    
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
    const postEdgesDirectoryNumbers = this.props.data.directoryListingQueryNumbers.edges;
    
   
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
          <SEO />

      <div className="pattern">
        <div className="container">
          
        <Intro />

        <div className="tagBox directoryBlock">
          <article className="blockTitle">Tags</article>
          <PostCats cats={allCats} />
          <PostTags tags={allTags} />
      </div>

          {/* <div className="podcast">
            <PostListing postEdges={postEdges} />   
          </div>  */}

          
          
          
          
         
            
           
          <div className="directory">
                  {/*             
                  
                  Build a loop that counts characters and feeds them to the graphQL query variable

                  var charCode = "A".charCodeAt(0);    // 65
                  charCode += 1;
                  var next = String.fromCharCode(charCode);      // "B" 
                  
                  */}

            <div className="directoryBlock"><article className="blockTitle">A</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryA} /></div>
            <div className="directoryBlock"><article className="blockTitle">B</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryB} /></div>
            <div className="directoryBlock"><article className="blockTitle">C</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryC} /></div>
            <div className="directoryBlock"><article className="blockTitle">D</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryD} /></div>
            <div className="directoryBlock"><article className="blockTitle">E</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryE} /></div>
            <div className="directoryBlock"><article className="blockTitle">F</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryF} /></div>
            <div className="directoryBlock"><article className="blockTitle">G</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryG} /></div>
            <div className="directoryBlock"><article className="blockTitle">H</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryH} /></div>
            <div className="directoryBlock"><article className="blockTitle">I</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryI} /></div>
            <div className="directoryBlock"><article className="blockTitle">J</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryJ} /></div>
            <div className="directoryBlock"><article className="blockTitle">K</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryK} /></div>
            <div className="directoryBlock"><article className="blockTitle">L</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryL} /></div>
            <div className="directoryBlock"><article className="blockTitle">M</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryM} /></div>
            <div className="directoryBlock"><article className="blockTitle">N</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryN} /></div>
            <div className="directoryBlock"><article className="blockTitle">O</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryO} /></div>
            <div className="directoryBlock"><article className="blockTitle">P</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryP} /></div>
            <div className="directoryBlock"><article className="blockTitle">Q</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryQ} /></div>
            <div className="directoryBlock"><article className="blockTitle">R</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryR} /></div>
            <div className="directoryBlock"><article className="blockTitle">S</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryS} /></div>
            <div className="directoryBlock"><article className="blockTitle">T</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryT} /></div>
            <div className="directoryBlock"><article className="blockTitle">U</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryU} /></div>
            <div className="directoryBlock"><article className="blockTitle">V</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryV} /></div>
            <div className="directoryBlock"><article className="blockTitle">W</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryW} /></div>
            <div className="directoryBlock"><article className="blockTitle">X</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryX} /></div>
            <div className="directoryBlock"><article className="blockTitle">Y</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryY} /></div>
            <div className="directoryBlock"><article className="blockTitle">Z</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryZ} /></div>
            <div className="directoryBlock"><article className="blockTitle">#</article><DirectoryListing postEdgesDirectory={postEdgesDirectoryNumbers} /></div>
          </div>

          <div className="bottomSpacer"></div>

          {/* {this.renderPaging()} */}
        </div>
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
export const listingQuery = graphql` {
  ListingQueryPodcast: 
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
  AllCatsQuery: 
    allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  AllTagsQuery: 
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
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
  directoryListingQueryNumbers: 
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: {frontmatter: {category: {eq: "numbers"}}}
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
