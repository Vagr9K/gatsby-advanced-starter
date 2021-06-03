import * as React from "react";

import { StyledNavButton } from "./style";

type NavButtonProps = {
  href: string;
  children?: JSX.Element[] | string;
};

const NavButton = ({ children, href }: NavButtonProps): JSX.Element => (
  <StyledNavButton activeClassName="gatsby-link-active" to={href}>
    {children}
  </StyledNavButton>
);

export default NavButton;
