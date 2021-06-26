import React from "react";

import { MDXProvider } from "@mdx-js/react";

import * as TextComponents from "./Text";
import * as CodeComponents from "./Code";
import * as TableComponents from "./Table";
import * as ListComponents from "./List";
import * as MiscComponents from "./Misc";

// Camponent mapping for the MDX render to use
const componentMapping = {
  p: TextComponents.Paragraph,
  h1: TextComponents.H1,
  h2: TextComponents.H2,
  h3: TextComponents.H3,
  h4: TextComponents.H4,
  h5: TextComponents.H5,
  h6: TextComponents.H6,

  blockquote: TextComponents.Blockquote,

  ul: ListComponents.Unordered,
  ol: ListComponents.Ordered,
  li: ListComponents.Item,

  table: TableComponents.Table,
  thead: TableComponents.Head,
  tbody: TableComponents.Body,
  tr: TableComponents.Row,
  td: TableComponents.BodyCell,
  th: TableComponents.HeadCell,

  pre: CodeComponents.Pre,
  code: CodeComponents.Code,
  inlineCode: CodeComponents.InlineCode,

  hr: MiscComponents.Break,
  thematicBreak: MiscComponents.Break,

  a: MiscComponents.Link,
  img: MiscComponents.Image,
};

type MDXThemeProps = {
  children: React.ReactNode;
};

const MDXTheme = ({ children }: MDXThemeProps): JSX.Element => (
  <>
    <CodeComponents.GlobalCodeStyle />
    <MDXProvider components={componentMapping}>{children}</MDXProvider>
  </>
);

export default MDXTheme;
