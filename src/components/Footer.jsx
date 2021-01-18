import React from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";
import "./Footer.css";

const config = require("../../data/SiteConfig");

function Footer() {
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
