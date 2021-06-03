import React, { useContext } from "react";

import NavButton from "./NavButton";
import { AdvancedLogo } from "../../icons";
import ConfigContext from "../../context/ConfigContext";

import {
  NavigationContainer,
  HomeButton,
  SiteTitle,
  ButtonContainer,
} from "./style";

const Navigation = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <NavigationContainer>
      <HomeButton to="/">
        <AdvancedLogo width={36} height={36} />
        <SiteTitle>{config.website.titleShort}</SiteTitle>
      </HomeButton>
      <ButtonContainer>
        <NavButton href="/">Posts</NavButton>
        <NavButton href="/about">About</NavButton>
      </ButtonContainer>
    </NavigationContainer>
  );
};

export default Navigation;
