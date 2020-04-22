import React, { Component } from "react";
import { Link } from "gatsby";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
            
            <div className="titleLeft">CREATIVE</div>
            <div className="logo"><Link to="/"></Link></div>
            <div className="titleRight">DIRECTORY</div>
        
      </React.Fragment>  
    );
  }
}

export default Logo;
