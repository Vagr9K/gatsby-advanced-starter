import styled, { css } from "styled-components";

export const SIDE_PADDING = "16px";

const ARTICLE_CONTENT_WIDTH = "736px";
export const ARTICLE_WIDTH = `calc(${ARTICLE_CONTENT_WIDTH} + 2 * ${SIDE_PADDING})`;

export const WrapperCss = css`
  width: 100%;

  padding: 0 16px;

  max-width: ${ARTICLE_WIDTH};
`;

// Same as above but removes padding once under max width
const ExtendingCss = css`
  width: 100%;
  padding: 0;

  @media (min-width: ${ARTICLE_WIDTH}) {
    padding: 0 16px;

    max-width: ${ARTICLE_WIDTH};
  }
`;

// Utility components
export const ExtendingWrapper = styled.div`
  ${ExtendingCss}
`;

export const WidthWrapper = styled.div`
  ${WrapperCss}
`;
