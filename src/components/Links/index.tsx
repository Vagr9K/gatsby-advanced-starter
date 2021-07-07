import React from "react";

import { LinkProps } from "./BaseLink";
import * as S from "./styles";

export const { IconCSS } = S;

export const IconLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
}: LinkProps): JSX.Element => (
  <S.IconLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
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
  noBasePath,
}: LinkProps): JSX.Element => (
  <S.PrimaryLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
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
  noBasePath,
}: LinkProps): JSX.Element => (
  <S.AnimatedLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
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
  noBasePath,
}: LinkProps): JSX.Element => (
  <S.TransparentLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
  >
    {children}
  </S.TransparentLink>
);

export const HeadingLink = ({
  to,
  href,
  className,
  children,
  activeClassName,
  noBasePath,
}: LinkProps): JSX.Element => (
  <S.HeadingLink
    to={to}
    href={href}
    className={className}
    activeClassName={activeClassName}
    noBasePath={noBasePath}
  >
    {children}
  </S.HeadingLink>
);
