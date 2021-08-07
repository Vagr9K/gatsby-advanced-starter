import React from "react";

import { Link, useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";

import "./styles.css";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <footer className="footer-wrapper">
      <div className="link-grid">
        <UserLinks includeRss />
      </div>
      <div className="info">
        <p>
          Based on{" "}
          <Link to="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </Link>
        </p>
        <p>{config.website.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
