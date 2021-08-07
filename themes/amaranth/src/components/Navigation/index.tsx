import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import { AdvancedLogo } from "../../icons";

import * as S from "./style";

const Navigation = (): JSX.Element => {
  const config = useConfig();

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
