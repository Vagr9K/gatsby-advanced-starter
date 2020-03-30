import React, { Component } from "react";
import { Link } from "gatsby";
import ButtonDown from "./Form";

class Headline extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo"><Link to="/"></Link></div>
          
          <div className="intro">
            <div className="introHello">
              Cataloging the creative studios & internal design teams of the pacific northwest. 
            </div>

            {/* rename this away from 'submit' */}
            <div className="introSubmit">
              <a target="_blank" href="mailto:jonny@seattlecreative.directory">Contact</a> 
              <a target="_blank" href="https://buttondown.email/creativedirectory">Subscribe</a> 
              {/* <a href="#">Add an entry</a>*/}
            
              {/* Subscribe form */}
              {/* <ButtonDown /> */}
            </div>
          
        </div>
      </React.Fragment>  
    );
  }
}

export default Headline;
