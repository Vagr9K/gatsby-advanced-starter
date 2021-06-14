import React, { useContext } from "react";
import styled from "styled-components";

import {
  Twitter as TwitterIcon,
  LinkedinSquare as LinkedInIcon,
  FacebookCircle as FacebookIcon,
  Reddit as RedditIcon,
} from "@styled-icons/boxicons-logos";
import { Link as LinkIcon } from "@styled-icons/boxicons-regular";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import urlJoin from "url-join";

import Separator from "../shared/Separator";
import { H3 } from "../../theme";
import { Post } from "../../types";
import { SiteConfig } from "../../config";
import ConfigContext from "../../context/ConfigContext";

const Wrapper = styled.section`
  display: grid;

  grid-auto-flow: row;
  grid-gap: 8px;
`;

const LinkWrapper = styled.div`
  display: grid;

  grid-auto-flow: column;
  grid-gap: 24px;

  align-items: center;
  align-content: center;

  @media (max-width: 404px) {
    grid-auto-flow: row;
    grid-gap: 8px;

    justify-content: center;
    justify-items: center;
  }
`;

const Label = styled(H3)`
  &:after {
    content: "Share";
    color: var(--color-grey-300);
    text-transform: uppercase;
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;

  color: var(--color-grey-700);
`;

const LinkButton = styled(LinkIcon)`
  cursor: pointer;
`;

export const generateRelatedTwitterNames = (
  config: SiteConfig
): Array<string> => {
  const relatedTwitterNames = [];
  if (config.user.twitterName)
    relatedTwitterNames.push(config.user.twitterName);

  if (config.website.twitterName)
    relatedTwitterNames.push(config.website.twitterName);

  return relatedTwitterNames;
};

type SocialLinksProps = {
  post: Post;
};

const ArticleShare = ({ post }: SocialLinksProps): JSX.Element => {
  const { title, excerpt, slug } = post;

  const config = useContext(ConfigContext);

  const url = urlJoin(config.website.url, config.pathPrefix, slug);

  const relatedTwitterNames = generateRelatedTwitterNames(config);

  return (
    <Wrapper>
      <LinkWrapper>
        <Label />
        <LinkGrid>
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
          <LinkButton
            size={40}
            onClick={() => navigator.clipboard.writeText(url)}
          />
        </LinkGrid>
      </LinkWrapper>
      <Separator />
    </Wrapper>
  );
};

export default ArticleShare;
