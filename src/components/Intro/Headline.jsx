import React, { Component } from "react";

class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        
            <div className="headline">
            <h1>{ headline }</h1>
            </div>

            {/* rename this away from 'submit' */}
            <div className="headline-contact">
              <a className="headline-contact--link" target="_blank" href="mailto:jonny@seattlecreative.directory">Contact</a> 
              <a className="headline-contact--link" target="_blank" href="https://buttondown.email/creativedirectory">Subscribe</a> 
              {/* <a href="#">Add an entry</a>*/}
            
             
            </div>
        
      </React.Fragment>  
    );
  }
}

export default Headline;
