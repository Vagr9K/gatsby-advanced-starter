import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary-100: #85e2b4;
    --color-primary-200: #72e0a9;
    --color-primary-300: #5edb9c;
    --color-primary-400: #4bd892;
    --color-primary: #37d385;
    --color-primary-600: #31bf78;
    --color-primary-700: #2fa86b;
    --color-primary-800: #26935d;
    --color-primary-900: #217c4f;

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
