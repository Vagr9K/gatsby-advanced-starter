import * as React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, css } from "styled-components";

import { breakpoints } from "./Constants";

const MobileH1 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.25px;
`;

const MobileH2 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 40px;
  letter-spacing: 0px;
`;
const MobileH3 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.15px;
`;
const MobileH4 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 0.25px;
`;
const MobileH5 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.35px;
`;
const MobileH6 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

const MobileBody = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const MobileCaption = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

const MobileOverline = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const MobileCode = css`
  font-family: "Fira Code", monospace !important;
  font-size: 14px !important;
  line-height: 21px !important;
`;

const DesktopH1 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 47px;
  line-height: 56px;
`;

const DesktopH2 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 39px;
  line-height: 48px;
`;
const DesktopH3 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 33px;
  line-height: 40px;
  letter-spacing: 0.15px;
`;
const DesktopH4 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.25px;
`;
const DesktopH5 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 0.35px;
`;
const DesktopH6 = css`
  font-family: "Alfa Slab One", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

const DesktopBody = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
`;

const DesktopCaption = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const DesktopOverline = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const DesktopCode = css`
  font-family: "Fira Code", monospace !important;
  font-size: 16px !important;
  line-height: 24px !important;
`;

const H1Style = css`
  ${MobileH1}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH1}
  }
`;

const H2Style = css`
  ${MobileH2}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH2}
  }
`;

const H3Style = css`
  ${MobileH3}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH3}
  }
`;

const H4Style = css`
  ${MobileH4}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH4}
  }
`;

const H5Style = css`
  ${MobileH5}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH5}
  }
`;

const H6Style = css`
  ${MobileH6}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopH6}
  }
`;

const BodyStyle = css`
  ${MobileBody}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopBody}
  }
`;

const CaptionStyle = css`
  ${MobileCaption}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopCaption}
  }
`;

const OverlineStyle = css`
  ${MobileOverline}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopOverline}
  }
`;

const CodeStyle = css`
  ${MobileCode}
  @media (min-width: ${breakpoints.sm}) {
    ${DesktopCode}
  }
`;

const ButtonLabelStyle = css`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const TypographyStyles = createGlobalStyle`
  h1 {
    ${H1Style}
  }

  h2 {
    ${H2Style}
  }

  h3 {
    ${H3Style}
  }

  h4 {
    ${H4Style}
  }

  h5 {
    ${H5Style}
  }

  h6 {
    ${H6Style}
  }

  p {
    ${BodyStyle}
  }

  button {
    ${ButtonLabelStyle}
  }

  code {
    ${CodeStyle}
  }
`;

export const styles = {
  H1: H1Style,
  H2: H2Style,
  H3: H3Style,
  H4: H4Style,
  H5: H5Style,
  H6: H6Style,
  Body: BodyStyle,
  Caption: CaptionStyle,
  Overline: OverlineStyle,
  ButtonLabel: ButtonLabelStyle,
  Code: CodeStyle,
};

const Typography = (): JSX.Element => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Fira+Sans:ital,wght@0,400;0,500;1,400&family=Fira+Code:wght@500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <TypographyStyles />
  </>
);

export default Typography;
