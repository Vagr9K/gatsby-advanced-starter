import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { SiteConfig } = this.props;
    return (
      <footer className="footer">
        <h4>{SiteConfig.copyright}</h4>
      </footer>
    );
  }
}

export default Footer;
