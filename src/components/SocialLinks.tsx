import React, { useContext } from "react";
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
import urljoin from "url-join";
import ConfigContext from "../context/ConfigContext";
import "./SocialLinks.css";

type Props = {
  postSlug: string;
  mobile: boolean;
  postExcerpt?: string;
  postTitle: string;
};

const SocialLinks: React.FC<Props> = ({
  postSlug,
  mobile,
  postExcerpt,
  postTitle,
}) => {
  const config = useContext(ConfigContext);

  const url = urljoin(config.website.url, config.pathPrefix, postSlug);
  const iconSize = mobile ? 36 : 48;
  const filter = (count: number) => (count > 0 ? count.toString() : "");
  const renderShareCount = (count: number) => (
    <div className="share-count">{filter(count)}</div>
  );

  const relatedTwitterNames = [];
  if (config.user.twitterName)
    relatedTwitterNames.push(config.user.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={postTitle}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>
          {(count) => renderShareCount(count)}
        </RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={postTitle}
        via={config.website.name}
        related={relatedTwitterNames}
      >
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postExcerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {(count) => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={postTitle}
        summary={postExcerpt}
        source={config.website.name}
      >
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={postTitle}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  );
};

export default SocialLinks;
