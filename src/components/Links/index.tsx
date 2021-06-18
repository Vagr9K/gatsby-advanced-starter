import React from "react";

import { BaseLink, LinkProps } from "./BaseLink";
import * as S from "./styles";

export const { IconCSS } = S;

export const Link = BaseLink;

export const IconLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
}: LinkProps): JSX.Element => (
  <S.IconLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </S.IconLink>
);

export const PrimaryLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
}: LinkProps): JSX.Element => (
  <S.PrimaryLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </S.PrimaryLink>
);

export const AnimatedLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
}: LinkProps): JSX.Element => (
  <S.AnimatedLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </S.AnimatedLink>
);

export const TransparentLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
}: LinkProps): JSX.Element => (
  <S.TransparentLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </S.TransparentLink>
);
