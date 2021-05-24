import { createGlobalStyle } from "styled-components";

const CssReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-width: 100%;
  }
  #___gatsby #gatsby-focus-wrapper {
    min-height: 100vh;
    min-width: 100vw;
  }

`;

export default CssReset;
