import styled from "styled-components";
import { PrimaryLink } from "../Links";

import { styles, Caption as BaseCaption } from "../../theme";

export const TagLink = styled(PrimaryLink)`
  ${styles.Overline}

  text-transform: uppercase;

  &::before {
    content: "#";
  }
`;

export const CategoryLink = styled(PrimaryLink)`
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
