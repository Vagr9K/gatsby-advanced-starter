import React, { Component } from "react";

class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        
            <div className="introHello">
            <h1>{ headline }</h1>
            </div>

            {/* rename this away from 'submit' */}
            <div className="introContact">
              <a target="_blank" href="mailto:jonny@seattlecreative.directory">Contact</a> 
              <a target="_blank" href="https://buttondown.email/creativedirectory">Subscribe</a> 
              {/* <a href="#">Add an entry</a>*/}
            
             
            </div>
        
      </React.Fragment>  
    );
  }
}

export default Headline;
