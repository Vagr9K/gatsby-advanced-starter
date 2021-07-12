import styled, { css } from "styled-components";
import { BaseLink } from "./BaseLink";

type LinkStyleProps = {
  activeClassName?: string;
};

const TransparentCSS = css`
  text-decoration: none;
  color: inherit;

  width: 100%;
`;

export const IconCSS = css`
  color: var(--color-grey-700);

  &:hover {
    color: var(--color-primary);
  }
`;

const PrimaryCSS = css`
  display: inline-block;

  text-decoration: none;
  color: var(--color-primary);

  &:hover {
    color: var(--color-primary);
  }
`;

const AnimatedCSS = css<LinkStyleProps>`
  display: inline-block;

  text-decoration: none;
  color: var(--color-primary);

  background-color: inherit;

  &:after {
    display: block;
    content: "";

    width: 100%;
    height: 2px;

    background-color: var(--color-primary);

    transition: transform 300ms ease;
    transform: scaleX(0);
  }

  &:hover {
    color: var(--color-primary);
  }
  &:hover::after {
    transform: scaleX(1);
  }

  &.${(props) => props.activeClassName} {
    &:after {
      transform: scaleX(1);
    }
  }
`;

const HeadingCss = css`
  text-decoration: none;
  color: inherit;

  &:hover::before {
    content: "#";
    display: block;
    position: absolute;
    transform: translateX(-100%);
    padding-right: 8px;

    color: var(--color-primary);
  }
`;

export const AnimatedLink = styled(BaseLink).attrs(
  ({ activeClassName }: LinkStyleProps) => ({
    activeClassName: activeClassName || "gatsby-active-link",
  })
)`
  ${AnimatedCSS}
`;

export const TransparentLink = styled(BaseLink)`
  ${TransparentCSS}
`;

export const PrimaryLink = styled(BaseLink)`
  ${PrimaryCSS}
`;

export const IconLink = styled(BaseLink)`
  ${IconCSS}
`;

export const HeadingLink = styled(BaseLink)`
  ${HeadingCss}
`;
