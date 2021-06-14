import React, { useContext } from "react";

import NavButton from "./NavButton";
import { AdvancedLogo } from "../../icons";
import ConfigContext from "../../context/ConfigContext";

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
        <NavButton href="/">Posts</NavButton>
        <NavButton href="/about">About</NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
