import React from "react";
import styled from "styled-components";

import * as styles from "../../../theme";

import { ExtendingWrapper } from "../Spacing";

type ListProps = {
  children?: React.ReactNode;
};

const UnorderedStyle = styled.ul`
  padding-left: 40px;
`;

export const Unordered = ({ children }: ListProps): JSX.Element => (
  <ExtendingWrapper>
    <UnorderedStyle>{children}</UnorderedStyle>
  </ExtendingWrapper>
);

const OrderedStyle = styled.ol`
  padding-left: 40px;
`;

export const Ordered = ({ children }: ListProps): JSX.Element => (
  <ExtendingWrapper>
    <OrderedStyle>{children}</OrderedStyle>
  </ExtendingWrapper>
);

export const Item = styled.li`
  ${styles.styles.Body}

  /* Remove padding from direct child wrapper components */
  & > ${ExtendingWrapper} {
    padding-left: 0;
  }

  & > * {
    margin-bottom: 12px;
  }

  ::marker {
    color: var(--color-grey-500);
  }

  :hover {
    ::marker {
      color: var(--color-primary-100);
    }
  }
`;
