import styled, { css } from "styled-components";

import { H1 } from "../../theme";

export const ScreenReaderOnlyCss = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`;

export const ScreenReaderH1 = styled(H1)`
  ${ScreenReaderOnlyCss}
`;
