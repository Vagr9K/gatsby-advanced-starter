import React, { Component } from "react";
import { Link } from "gatsby";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
            
            <div className="title-left">CREATIVE</div>
            <div className="logo"><Link to="/"></Link></div>
            <div className="title-right">DIRECTORY</div>
        
      </React.Fragment>  
    );
  }
}

export default Logo;
