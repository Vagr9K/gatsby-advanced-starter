import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary-100: #457A60;
    --color-primary-200: #3C7B5C;
    --color-primary-300: #327D57;
    --color-primary-400: #237049;
    --color-primary: #15663E;
    --color-primary-600: #125C37;
    --color-primary-700: #135433;
    --color-primary-800: #0F4C2E;
    --color-primary-900: #0C3F26;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
