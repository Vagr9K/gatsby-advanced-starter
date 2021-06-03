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

export const NavigationContainer = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
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

type StyledNavButtonProps = {
  activeClassName: string;
};

export const StyledNavButton = styled(Link).attrs(
  ({ activeClassName }: StyledNavButtonProps) => ({
    activeClassName,
  })
)`
  ${styles.ButtonLabel}

  padding: 0 0 8px 0;

  background-color: var(--color-background);

  border-style: solid;
  border-color: var(--color-primary);

  border-width: 0px;

  &.${(props) => props.activeClassName} {
    border-bottom-width: 2px;
  }

  text-decoration: none;
  color: var(--color-text);
`;
