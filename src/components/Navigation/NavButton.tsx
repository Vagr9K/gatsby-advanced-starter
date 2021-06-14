import * as React from "react";

import * as S from "./style";

type NavButtonProps = {
  href: string;
  children?: JSX.Element[] | string;
};

const NavButton = ({ children, href }: NavButtonProps): JSX.Element => (
  <S.NavButton activeClassName="gatsby-link-active" to={href}>
    {children}
  </S.NavButton>
);

export default NavButton;
