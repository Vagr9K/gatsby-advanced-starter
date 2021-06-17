import styled from "styled-components";

import { Link } from "gatsby";
import { styles } from "../../theme";

export const HomeButton = styled(Link)`
  text-decoration: none;
  color: var(--color-text);

  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  align-items: center;
`;

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const NavGrid = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;

  align-items: flex-start;
`;

export const SiteTitle = styled.p`
  ${styles.ButtonLabel}

  @media (max-width: 500px) {
    display: none;
  }
`;

type NavButtonProps = {
  activeClassName: string;
};

export const NavButton = styled(Link).attrs(
  ({ activeClassName }: NavButtonProps) => ({
    activeClassName,
  })
)`
  ${styles.ButtonLabel}

  background-color: var(--color-background);

  &:after {
    display: block;
    content: "";

    margin: 8px auto 0 auto;

    background-color: var(--color-primary);

    transition: transform 300ms ease;
    transform: scaleX(0);

    width: 100%;
    height: 2px;
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

  text-decoration: none;
  color: var(--color-text);
`;
