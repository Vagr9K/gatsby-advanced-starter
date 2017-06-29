import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Toolbar.scss';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <Link className="link" to={prefixLink('/')}>
          <Button className="button" icon key="nav-home">home</Button>
        </Link>
      </div>
    );
  }
}

export default Toolbar;
