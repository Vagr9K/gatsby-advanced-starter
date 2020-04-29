import React, { Component } from "react";
import { Link } from "gatsby";
import Subscribe from "./Subscribe";



class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        <div className="headline">
          <h1>{headline}</h1>
        </div>

        {/* When you merge this into test, give a name to the form element instead of the derivative styling */}
        <div className="headline-contact">
          <a
            className="headline-contact--link"
            target="_blank"
            href="mailto:jonny@seattlecreative.directory"
          >
            Contact
          </a>
          
          <Subscribe />
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;
