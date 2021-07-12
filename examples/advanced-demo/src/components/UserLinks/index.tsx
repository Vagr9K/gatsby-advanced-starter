import React, { useContext } from "react";

import ConfigContext from "gatsby-theme-advanced/src/context/ConfigContext";
import Link from "gatsby-theme-advanced/src/components/Link";
import { SiteConfig } from "gatsby-theme-advanced/src/config";

import "./styles.css";

// Utilities
const renderLink = (url: string, text: string): JSX.Element => (
  <Link to={url}>{text}</Link>
);

const renderTwitterLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.twitterName;

  if (!userName) return null;

  const url = `https://twitter.com/${userName}`;
  return renderLink(url, "Twitter");
};

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user?.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, "GitHub");
};

const renderLinkedInLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.linkedIn;

  if (!userName) return null;

  const url = `https://www.linkedin.com/in/${userName}`;
  return renderLink(url, "LinkedIn");
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user?.email || ""}`;
  return renderLink(url, "Email");
};

const renderRssLink = (config: Readonly<SiteConfig>): JSX.Element =>
  renderLink(config.website.rss, "RSS");

type IconLinksProps = {
  includeRss?: boolean;
};

const defaultProps: IconLinksProps = {
  includeRss: false,
};

const UserLinks = ({ includeRss }: IconLinksProps): JSX.Element | null => {
  const config = useContext(ConfigContext);

  if (!config.user) return null;

  return (
    <div className="userlink-grid">
      {renderTwitterLink(config)} {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </div>
  );
};

UserLinks.defaultProps = defaultProps;

export default UserLinks;
