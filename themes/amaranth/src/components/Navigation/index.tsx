import React, { useContext } from "react";

import ConfigContext from "gatsby-theme-advanced/src/context/ConfigContext";

import { AdvancedLogo } from "../../icons";

import * as S from "./style";

const Navigation = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <S.Wrapper>
      <S.HomeButton to="/">
        <AdvancedLogo width={36} height={36} />
        <S.SiteTitle>{config.website.titleShort}</S.SiteTitle>
      </S.HomeButton>
      <S.NavGrid>
        <S.NavButton to="/">Posts</S.NavButton>
        <S.NavButton noBasePath to="/about">
          About
        </S.NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
