import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Exit } from "@styled-icons/boxicons-regular";

import { styles, constants } from "../../theme";

const ReadButton = styled(GatsbyLink)`
  align-self: flex-end;

  text-decoration: none;
  color: var(--color-primary);

  ${styles.ButtonLabel}

  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;

  justify-content: start;
  align-items: center;

  @media (max-width: ${constants.breakpoints.lg}) {
    display: none;
  }
`;

type ArticleButtonProps = { to: string };

const ArticleButton = ({ to }: ArticleButtonProps): JSX.Element => (
  <ReadButton to={to}>
    Read the article <Exit size={28} />
  </ReadButton>
);

export default ArticleButton;
