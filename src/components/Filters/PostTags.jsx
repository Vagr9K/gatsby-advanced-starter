import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (

      <div className="filter-tag-container">
        <div className="filter-tag-container">
          {/* Studio Size: &nbsp; */}
          <Link className="filter-tag--size" to="/tags/small">small</Link>
          <Link className="filter-tag--size" to="/tags/medium">medium</Link>
          <Link className="filter-tag--size" to="/tags/large">large</Link>
          <Link className="filter-tag--size" to="/tags/huge">huge</Link>
        </div>

        
        {/* General list of all tags */}
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <a className="filter-tag--page" type="anchor">{tag}</a>
            </Link>
            
          ))}


      </div>
    );
  }
}

export default PostTags;
