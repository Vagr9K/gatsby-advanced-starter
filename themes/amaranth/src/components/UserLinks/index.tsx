import React, { useContext } from "react";
import styled from "styled-components";

import { MailSend, Rss } from "@styled-icons/boxicons-regular";
import { Twitter, LinkedinSquare, Github } from "@styled-icons/boxicons-logos";
import { StyledIcon } from "@styled-icons/styled-icon";

import { SiteConfig } from "gatsby-theme-advanced/src/config";
import ConfigContext from "gatsby-theme-advanced/src/context/ConfigContext";

import { IconLink } from "../Links";

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
`;

// Utilities
const renderLink = (url: string, Icon: StyledIcon): JSX.Element => (
  <IconLink to={url}>
    <Icon size={48} />
  </IconLink>
);

const renderTwitterLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.twitterName;

  if (!userName) return null;

  const url = `https://twitter.com/${userName}`;
  return renderLink(url, Twitter);
};

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user?.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, Github);
};

const renderLinkedInLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user?.linkedIn;

  if (!userName) return null;

  const url = `https://www.linkedin.com/in/${userName}`;
  return renderLink(url, LinkedinSquare);
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user?.email || ""}`;
  return renderLink(url, MailSend);
};

const renderRssLink = (config: Readonly<SiteConfig>): JSX.Element =>
  renderLink(config.website.rss, Rss);

type IconLinksProps = {
  includeRss?: boolean;
  className?: string;
};

const defaultProps: IconLinksProps = {
  includeRss: false,
};

const UserLinks = ({
  includeRss,
  className,
}: IconLinksProps): JSX.Element | null => {
  const config = useContext(ConfigContext);

  if (!config.user) return null;

  return (
    <LinkGrid className={className}>
      {renderTwitterLink(config)} {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </LinkGrid>
  );
};

UserLinks.defaultProps = defaultProps;

export default UserLinks;
