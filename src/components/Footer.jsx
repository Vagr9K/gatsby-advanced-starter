import React, { useContext } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";
import ConfigContext from "../context/ConfigContext";
import "./Footer.css";

function Footer() {
  const config = useContext(ConfigContext);

  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <UserLinks labeled />
      <div className="notice-container">
        <h4>{copyright}</h4>

        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
        <h4>
          Based on{" "}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </a>
          .
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
