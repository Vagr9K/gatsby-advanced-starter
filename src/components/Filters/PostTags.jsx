import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (

      <div className="tag-container">
        <div className="tag-container">
          {/* Studio Size: &nbsp; */}
          <Link className="tag-container--size" to="/tags/small">small</Link>
          <Link className="tag-container--size" to="/tags/medium">medium</Link>
          <Link className="tag-container--size" to="/tags/large">large</Link>
          <Link className="tag-container--size" to="/tags/huge">huge</Link>
        </div>

        
        {/* General list of all tags */}
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <a className="tag--link" type="anchor">{tag}</a>
            </Link>
            
          ))}


      </div>
    );
  }
}

export default PostTags;
