import React from "react";
import styled, { css } from "styled-components";

import * as styles from "../../../theme";

import { WidthWrapper } from "../Spacing";

const TableWrapper = styled(WidthWrapper)`
  /* Scroll the table when not enough space is available */
  overflow-x: auto;
`;

const TableStyled = styled.table`
  table-layout: fixed;

  margin: 0 auto;

  border-spacing: 2px;
`;

type TableProps = {
  children?: React.ReactNode;
};

export const Table = ({ children }: TableProps): JSX.Element => (
  <TableWrapper>
    <TableStyled>{children}</TableStyled>
  </TableWrapper>
);

export const Head = styled.thead`
  ${styles.styles.ButtonLabel}
`;

export const Row = undefined; // Default style works fine

type CellProps = {
  align?: string;
};

const SharedCellCSS = css<CellProps>`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 4px;

  text-align: ${({ align }) => align};
`;

export const HeadCell = styled.th<CellProps>`
  ${SharedCellCSS}

  margin-right: 4px;
  margin-left: 4px;

  border-bottom: 2px solid var(--color-primary-100);
`;

export const BodyCell = styled.td<CellProps>`
  ${SharedCellCSS}

  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 4px;

  border-bottom: 1px solid var(--color-grey-300);

  :hover {
    background-color: var(--color-grey-100);
  }
`;

export const Body = styled.tbody`
  ${styles.styles.Body};
`;
