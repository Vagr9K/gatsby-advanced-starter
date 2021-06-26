import React from "react";
import styled from "styled-components";

import * as styles from "../../../theme";

import { ExtendingWrapper } from "../Spacing";

export const Paragraph = undefined; // Default works fine

export const { H1 } = styles;
export const { H2 } = styles;
export const { H3 } = styles;
export const { H4 } = styles;
export const { H5 } = styles;
export const { H6 } = styles;

const BlockquoteStyle = styled.blockquote`
  padding: 0 16px;

  background-color: var(--color-grey-100);

  border-left: 8px solid var(--color-grey-300);
`;

type BlockquoteProps = {
  children?: React.ReactNode;
};

export const Blockquote = ({ children }: BlockquoteProps): JSX.Element => (
  <ExtendingWrapper>
    <BlockquoteStyle>{children}</BlockquoteStyle>
  </ExtendingWrapper>
);
