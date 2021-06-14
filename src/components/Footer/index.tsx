import React, { useContext } from "react";

import IconLinks from "../IconLinks";
import { ExternalLink, Caption } from "../../theme";

import ConfigContext from "../../context/ConfigContext";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <S.LinksLabel />
        <IconLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          Based on{" "}
          <ExternalLink href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </ExternalLink>
        </Caption>
        <Caption>{config.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
