import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/Filters/PostTags";
import PostCats from "../components/Filters/PostCats";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import config from "../../data/SiteConfig";


export default class TagTemplate extends React.Component {
  render() {
    const allTags = this.props.data.AllTagsQuery.distinct;
    const allCats = this.props.data.AllCatsQuery.distinct;
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="wrapper">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        
          <div className="container"> 
          <div className="home"><Link to="/"></Link></div>
          <div className="topSpacer"></div>
          
            <div className="tagBox directoryBlock">
                <article className="blockTitle">Tags</article>
                <PostCats cats={allCats} />
                <PostTags tags={allTags} />
            </div>
              
            <div className="directory">
                <div className="directoryBlockFilter">  
                  <article className="blockTitle">{tag}</article>
                  <DirectoryListing postEdgesDirectory={postEdges} />
                </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
  AllCatsQuery: 
    allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  AllTagsQuery: 
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }

    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
