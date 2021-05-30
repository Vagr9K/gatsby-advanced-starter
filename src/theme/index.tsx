import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Typography, { styles as typographyStyles } from "./Typography";
import Color from "./Color";
import CssReset from "./CssReset";

export * from "./Primitives";

export const styles = { ...typographyStyles };

const theme = {
  // TODO: Placeholder for future use
};

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <CssReset />
    <Typography />
    <Color />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
