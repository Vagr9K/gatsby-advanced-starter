import React, { useContext } from "react";

import ConfigContext from "gatsby-theme-advanced/src/context/ConfigContext";
import Link from "gatsby-theme-advanced/src/components/Link";

import UserLinks from "../UserLinks";

import "./styles.css";

const Footer = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <div className="footer-wrapper">
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
    </div>
  );
};

export default Footer;
