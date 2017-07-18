import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import Link from 'gatsby-link';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './Footer.scss';

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { copyright } = this.props.config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <Button flat secondary iconClassName="fa fa-rss">Subscribe</Button>
          </Link>
          <h4>
            Based on <a href="https://github.com/Vagr9K/gatsby-material-starter">Gatsby Material Starter</a>.
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
