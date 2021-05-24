import * as React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, css } from "styled-components";

const MobileTypography = css`
  h1 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.25px;
  }

  h2 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 29px;
    line-height: 40px;
    letter-spacing: 0px;
  }

  h3 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.15px;
  }

  h4 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.35px;
  }

  h6 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.4px;
  }

  p,
  .body {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  span,
  .caption {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
  }

  .overline {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;

    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .button {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
`;

const DesktopTypography = css`
  h1 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 47px;
    line-height: 56px;
  }

  h2 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 48px;
  }

  h3 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 40px;
    letter-spacing: 0.15px;
  }

  h4 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 32px;
    letter-spacing: 0.25px;
  }

  h5 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 0.35px;
  }

  h6 {
    font-family: "Alfa Slab One", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
  }

  p,
  .body {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.5px;
  }

  span,
  .caption {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
  }

  .overline {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .button {
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
`;

const TypographyStyles = createGlobalStyle`
    ${MobileTypography}
    @media (min-width: 564px) {
        ${DesktopTypography}
    }
`;

const Typography = (): JSX.Element => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fira+Sans:ital,wght@0,400;0,500;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <TypographyStyles />
  </>
);

export default Typography;
