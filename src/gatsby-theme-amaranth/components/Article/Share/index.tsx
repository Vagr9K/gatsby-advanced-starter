/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";

import {
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,   // telegram linkedin
  FacebookCircle as FacebookIcon,
  WhatsappSquare as WhatsAppIcon,   // whatsapp-square whatsapp
} from "@styled-icons/boxicons-logos";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { Types, useConfig } from "gatsby-theme-advanced";

import LinkCopyNotification from "./LinkCopyNotification";
import Separator from "../../shared/Separator";
import * as S from "./styles";

const generateRelatedTwitterNames = (
  config: Types.SiteConfig
): Array<string> => {
  const relatedTwitterNames = [];
  if (config.user?.twitterName)
    relatedTwitterNames.push(config.user.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return relatedTwitterNames;
};

type ArticleShareProps = {
  post: Types.Post;
};

const ArticleShare = ({ post }: ArticleShareProps): JSX.Element => {
  const { title, excerpt, url } = post;

  const [showLinkNotification, setShowlinkNotification] = useState(false);

  const config = useConfig();

  const relatedTwitterNames = generateRelatedTwitterNames(config);

  return (
    <S.Wrapper aria-label="Compartilhas nas redes sociais">
      <S.LinkWrapper>
        <S.Label>Share</S.Label>
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

          <WhatsappShareButton 
            url={url} 
            title={title}
          >
            <WhatsAppIcon size={40} />
          </WhatsappShareButton>

          <TelegramShareButton 
            url={url} 
            title={title}
          >
            <TelegramIcon size={40} />
          </TelegramShareButton>

          <S.LinkButton
            size={40}
            onClick={() => {
              // eslint-disable-next-line no-void
              void navigator.clipboard.writeText(url);
              setShowlinkNotification(true);
            }}
          />
          {showLinkNotification && (
            <LinkCopyNotification
              onAnimationEnd={() => {
                setShowlinkNotification(false);
              }}
            />
          )}
        </S.LinkGrid>
      </S.LinkWrapper>
      <Separator />
    </S.Wrapper>
  );
};

export default ArticleShare;
