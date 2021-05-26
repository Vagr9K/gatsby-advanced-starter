import React, { useContext } from "react";
import styled from "styled-components";

import { MailSend, Rss } from "@styled-icons/boxicons-regular";
import { Twitter, LinkedinSquare, Github } from "@styled-icons/boxicons-logos";
import { StyledIcon } from "@styled-icons/styled-icon";

import { SiteConfig } from "../config";
import ConfigContext from "../context/ConfigContext";

// Styles
const IconLink = styled.a`
  color: inherit;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
`;

// Utilities
const renderLink = (url: string, Icon: StyledIcon): JSX.Element => (
  <IconLink href={url}>
    <Icon size={48} />
  </IconLink>
);

const renderTwitterLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user.twitterName;

  if (!userName) return null;

  const url = `https://twitter.com/${userName}`;
  return renderLink(url, Twitter);
};

const renderGitHubLink = (config: Readonly<SiteConfig>): JSX.Element | null => {
  const userName = config.user.github;

  if (!userName) return null;

  const url = `https://github.com/${userName}`;
  return renderLink(url, Github);
};

const renderLinkedInLink = (
  config: Readonly<SiteConfig>
): JSX.Element | null => {
  const userName = config.user.linkedIn;

  if (!userName) return null;

  const url = `https://www.linkedin.com/in/${userName}`;
  return renderLink(url, LinkedinSquare);
};

const renderEmailLink = (config: Readonly<SiteConfig>): JSX.Element => {
  const url = `mailto:${config.user.email}`;
  return renderLink(url, MailSend);
};

const renderRssLink = (config: Readonly<SiteConfig>): JSX.Element =>
  renderLink(config.website.rss, Rss);

type IconLinksProps = {
  includeRss?: boolean;
};

const defaultProps: IconLinksProps = {
  includeRss: false,
};

export const IconLinks = ({ includeRss }: IconLinksProps): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <LinkContainer>
      {renderTwitterLink(config)} {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </LinkContainer>
  );
};

IconLinks.defaultProps = defaultProps;

export default IconLinks;
