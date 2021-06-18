import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { MDXProvider } from "@mdx-js/react";
import * as styles from "../../theme";

import { AnimatedLink } from "../Links";
import Image from "../shared/Image";

const applyHeadingStyle = (component: AnyStyledComponent) => styled(component)`
  margin-top: 32px;
  margin-bottom: 16px;
`;

const paragraph = styled(styles.Body)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

// TODO: Finish the styling
const components = {
  p: paragraph,
  h1: applyHeadingStyle(styles.H1),
  h2: applyHeadingStyle(styles.H2),
  h3: applyHeadingStyle(styles.H3),
  h4: applyHeadingStyle(styles.H4),
  h5: applyHeadingStyle(styles.H5),
  h6: applyHeadingStyle(styles.H6),
  thematicBreak: undefined,
  blockquote: undefined,
  ul: undefined,
  ol: undefined,
  li: undefined,
  table: undefined,
  tr: undefined,
  td: undefined,
  th: undefined,
  pre: undefined,
  code: undefined,
  inlineCode: undefined,
  hr: undefined,
  a: AnimatedLink,
  img: Image,
};

type MDXThemeProps = {
  children: React.ReactNode;
};

const MDXTheme = ({ children }: MDXThemeProps): JSX.Element => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXTheme;
