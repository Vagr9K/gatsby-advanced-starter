import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { copyright } = this.props.SiteConfig;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <h4>{copyright}</h4>
      </footer>
    );
  }
}

export default Footer;
