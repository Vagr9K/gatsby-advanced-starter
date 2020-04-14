import React, { Component } from "react";
import { Link } from "gatsby";
import ButtonDown from "./Form";

class Headline extends Component {
  render() {
    return (
      <React.Fragment>
            
            <div className="titleLeft">CREATIVE</div>
            <div className="logo"><Link to="/"></Link></div>
            <div className="titleRight">DIRECTORY</div>

            <div className="introHello">
              <h1>Cataloging the creative studios & internal design teams of the pacific northwest. </h1>
            </div>

            {/* rename this away from 'submit' */}
            <div className="introContact">
              <a target="_blank" href="mailto:jonny@seattlecreative.directory">Contact</a> 
              <a target="_blank" href="https://buttondown.email/creativedirectory">Subscribe</a> 
              {/* <a href="#">Add an entry</a>*/}
            
              {/* Subscribe form */}
              {/* <ButtonDown /> */}

            </div>
        
      </React.Fragment>  
    );
  }
}

export default Headline;
