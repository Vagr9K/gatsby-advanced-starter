import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Typography, { styles as typographyStyles } from "./Typography";
import Color from "./Color";
import ScrollbarStyles from "./Scrollbar";
import Constants from "./Constants";
import CssReset from "./CssReset";

export * from "./Primitives";

export const styles = { ...typographyStyles };
export const constants = Constants;

const theme = {
  // TODO: Placeholder for future use
};

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <CssReset />
    <Color />
    <Typography />
    <ScrollbarStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
