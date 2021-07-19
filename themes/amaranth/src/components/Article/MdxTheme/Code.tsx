import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

import { styles } from "../../../theme";
import { SIDE_PADDING } from "../Spacing";

const CODE_CONTENT_WIDTH = "920px";
const CODE_BLOCK_SIZE = `calc(${CODE_CONTENT_WIDTH} + 2 * ${SIDE_PADDING})`;

export const GlobalCodeStyle = createGlobalStyle`${css`
  .gatsby-highlight {
    width: 100%;
    padding: 0;

    @media (min-width: ${CODE_BLOCK_SIZE}) {
      padding: 0 16px;

      max-width: ${CODE_BLOCK_SIZE};
    }
  }
`}`;

export const Pre = styled.pre`
  ${styles.Code}

  width: 100%;
  max-width: 100%;

  margin: 0 !important;

  /* Set border radius depending on element state */
  border-radius: 0px !important;

  @media (min-width: ${CODE_BLOCK_SIZE}) {
    border-radius: 6px !important;

    max-width: ${CODE_BLOCK_SIZE};
  }
`;

export const StyledCode = styled.code`
  ${styles.Code}

  width: 100%;
  max-width: 100%;
`;

type CodeProps = { className?: string; children?: React.ReactChildren };

export const Code = ({ className, children }: CodeProps): JSX.Element => (
  <StyledCode className={className} tabIndex={0}>
    {children}
  </StyledCode>
);

export const InlineCode = undefined; // Default style works great
