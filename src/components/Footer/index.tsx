import React, { useContext } from "react";

import { IconLinks } from "../IconLinks";
import { H3, ExternalLink, Caption } from "../../theme";

import ConfigContext from "../../context/ConfigContext";

import { FooterContainer, LinkContainer, InfoContainer } from "./style";

const Footer = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <FooterContainer>
      <LinkContainer>
        <H3>LINKS</H3>
        <IconLinks includeRss />
      </LinkContainer>

      <InfoContainer>
        <Caption>
          Based on{" "}
          <ExternalLink href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </ExternalLink>
        </Caption>
        <Caption>{config.copyright}</Caption>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
