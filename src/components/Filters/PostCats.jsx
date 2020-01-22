import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostCats extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div className="post-cat-container">
        {cats &&
          cats.map(category => (
            <Link
              key={category}
              style={{ textDecoration: "none" }}
              to={`/categories/${_.kebabCase(category)}`}
            >
              <a type="anchor">{category}</a>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostCats;
