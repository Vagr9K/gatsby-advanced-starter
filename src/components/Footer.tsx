import React, { useContext } from "react";
import styled from "styled-components";

import { IconLinks } from "./UserLinks";

import ConfigContext from "../context/ConfigContext";

const FooterContainer = styled.footer`
  display: grid;
  gap: 40px;
  justify-items: center;
  align-items: center;
  padding: 32px 0px 16px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  fill: var(--color-grey-700);
`;

const LinkContainer = styled.section`
  display: inline-grid;
  gap: 12px;
  justify-items: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: grid;
  gap: 8px;
  justify-items: center;
  align-items: center;
`;

const LowContrastUrl = styled.a`
  color: inherit;
`;

const LinkHeader = styled.h3`
  margin: 0;
`;

const Footer = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <FooterContainer>
      <LinkContainer>
        <LinkHeader>LINKS</LinkHeader>
        <IconLinks includeRss />
      </LinkContainer>

      <InfoContainer>
        <span>
          Based on{" "}
          <LowContrastUrl href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </LowContrastUrl>
        </span>
        <span>{config.copyright}</span>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
