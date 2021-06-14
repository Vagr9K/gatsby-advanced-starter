import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import { styles, Caption as BaseCaption } from "../../theme";

const Link = styled(GatsbyLink)`
  color: var(--color-primary);
  text-decoration: none;
`;

export const TagLink = styled(Link)`
  ${styles.Overline}

  text-transform: uppercase;

  &::before {
    content: "#";
  }
`;

export const CategoryLink = styled(Link)`
  ${styles.Caption}

  text-transform: capitalize;
`;

export const Caption = styled(BaseCaption)`
  color: var(--color-grey-700);
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
