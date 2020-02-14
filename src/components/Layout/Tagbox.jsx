import React, { Component } from "react";
import { graphql } from "gatsby";
import PostTags from "../Filters/PostTags";
import PostCats from "../Filters/PostCats";

class Tagbox extends Component {
  render() {

    const allCats = this.props.data.AllCatsQuery.distinct;
    const allTags = this.props.data.AllTagsQuery.distinct;
    

    return (
    
    <React.Fragment>  
      <div className="tagBox directoryBlock">
          <article className="blockTitle">Tags</article>
          <PostCats cats={allCats} />
          <PostTags tags={allTags} />
      </div>
    </React.Fragment>


        );
  }
}

export default Tagbox;

/* eslint no-undef: "off" */
export const catTagQuery = graphql` {
    AllCatsQuery: 
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    AllTagsQuery: 
      allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
      
}
`;
