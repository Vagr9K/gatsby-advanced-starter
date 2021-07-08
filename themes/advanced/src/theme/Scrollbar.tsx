import { createGlobalStyle, css } from "styled-components";

const ScrollbarStyles = createGlobalStyle`${css`
  /* Firefox */
  * {
    scrollbar-color: var(--color-grey-500) var(--color-background);
  }

  /* WebKit based */
  *::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  *::-webkit-scrollbar-track {
    background: var(--color-background);
  }
  *::-webkit-scrollbar-thumb {
    background: var(--color-grey-500);
    border-radius: 6px;
    border: 2px solid var(--color-background);
  }
  *::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-100);
  }
  *::-webkit-scrollbar-thumb:active {
    background: var(--color-primary);
  }
`}`;

export default ScrollbarStyles;
