import React, { useContext } from "react";

import {
  Twitter as TwitterIcon,
  LinkedinSquare as LinkedInIcon,
  FacebookCircle as FacebookIcon,
  Reddit as RedditIcon,
} from "@styled-icons/boxicons-logos";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import urlJoin from "url-join";

import Separator from "../../shared/Separator";
import { Post } from "../../../types";
import { SiteConfig } from "../../../config";
import ConfigContext from "../../../context/ConfigContext";
import * as S from "./styles";

const generateRelatedTwitterNames = (config: SiteConfig): Array<string> => {
  const relatedTwitterNames = [];
  if (config.user.twitterName)
    relatedTwitterNames.push(config.user.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return relatedTwitterNames;
};

type ArticleShareProps = {
  post: Post;
};

const ArticleShare = ({ post }: ArticleShareProps): JSX.Element => {
  const { title, excerpt, slug } = post;

  const config = useContext(ConfigContext);

  const url = urlJoin(config.website.url, config.pathPrefix, slug);

  const relatedTwitterNames = generateRelatedTwitterNames(config);

  return (
    <S.Wrapper>
      <S.LinkWrapper>
        <S.Label />
        <S.LinkGrid>
          <FacebookShareButton url={url} quote={excerpt}>
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            via={config.website.name}
            related={relatedTwitterNames}
          >
            <TwitterIcon size={40} />
          </TwitterShareButton>
          <RedditShareButton url={url} title={title}>
            <RedditIcon size={40} />
          </RedditShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            summary={excerpt}
            source={config.website.name}
          >
            <LinkedInIcon size={40} />
          </LinkedinShareButton>
          <S.LinkButton
            size={40}
            onClick={() => navigator.clipboard.writeText(url)}
          />
        </S.LinkGrid>
      </S.LinkWrapper>
      <Separator />
    </S.Wrapper>
  );
};

export default ArticleShare;
