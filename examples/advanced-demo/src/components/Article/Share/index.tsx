import React from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";

import { Types, useConfig } from "gatsby-theme-advanced";

import "./styles.css";

export const countFilter = (count: number): string =>
  count > 0 ? count.toString() : "";

export const generateRelatedTwitterNames = (
  config: Types.SiteConfig
): Array<string> => {
  const relatedTwitterNames = [];

  if (config?.user?.twitterName)
    relatedTwitterNames.push(config?.user?.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return relatedTwitterNames;
};

type SocialLinksProps = {
  post: Types.Post;
};

const ShareLinks = ({ post }: SocialLinksProps): JSX.Element => {
  const config = useConfig();

  const { excerpt, title, url } = post;

  const renderShareCount = (count: number) => (
    <div className="share-count">{countFilter(count)}</div>
  );

  const relatedTwitterNames = generateRelatedTwitterNames(config);

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={title}>
        <RedditIcon round size={48} />
        <RedditShareCount url={url}>
          {(count) => renderShareCount(count)}
        </RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via={config.website.name}
        related={relatedTwitterNames}
      >
        <TwitterIcon round size={48} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={excerpt}>
        <FacebookIcon round size={48} />
        <FacebookShareCount url={url}>
          {(count) => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={excerpt}
        source={config.website.name}
      >
        <LinkedinIcon round size={48} />
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon round size={48} />
      </TelegramShareButton>
    </div>
  );
};

export default ShareLinks;
