import React, { useContext } from "react";

import { MailSend, Rss } from "@styled-icons/boxicons-regular";
import { Twitter, LinkedinSquare, Github } from "@styled-icons/boxicons-logos";
import { StyledIcon } from "@styled-icons/styled-icon";

import { SiteConfig } from "../../config";
import ConfigContext from "../../context/ConfigContext";

import * as S from "./style";

// Utilities
const renderLink = (url: string, Icon: StyledIcon): JSX.Element => (
  <S.IconLink href={url}>
    <Icon size={48} />
  </S.IconLink>
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
  className?: string;
};

const defaultProps: IconLinksProps = {
  includeRss: false,
};

const IconLinks = ({ includeRss, className }: IconLinksProps): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <S.LinkGrid className={className}>
      {renderTwitterLink(config)} {renderGitHubLink(config)}
      {renderLinkedInLink(config)} {renderEmailLink(config)}
      {includeRss && renderRssLink(config)}
    </S.LinkGrid>
  );
};

IconLinks.defaultProps = defaultProps;

export default IconLinks;
