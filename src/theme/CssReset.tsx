import { createGlobalStyle } from "styled-components";

const CssReset = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-width: 100%;
  }
  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100%;
  }
`;

export default CssReset;
