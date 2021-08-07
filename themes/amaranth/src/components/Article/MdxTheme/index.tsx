import React from "react";

import { MDXProvider } from "@mdx-js/react";

import { Types } from "gatsby-theme-advanced";

import * as TextComponents from "./Text";
import * as CodeComponents from "./Code";
import * as TableComponents from "./Table";
import * as ListComponents from "./List";
import * as MiscComponents from "./Misc";

// Camponent mapping for the MDX render to use
const getComponentMapping = (post: Types.Post) => {
  // Generate heading components with correct hashlinks
  const headings = TextComponents.createHeadings(post.slug);

  return {
    p: TextComponents.Paragraph,
    h1: headings.H1,
    h2: headings.H2,
    h3: headings.H3,
    h4: headings.H4,
    h5: headings.H5,
    h6: headings.H6,

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
};

type MDXThemeProps = {
  children: React.ReactNode;
  post: Types.Post;
};

const MDXTheme = ({ children, post }: MDXThemeProps): JSX.Element => (
  <>
    <MiscComponents.GlobalGatsbyImageStyle />
    <CodeComponents.GlobalCodeStyle />
    <MDXProvider components={getComponentMapping(post)}>{children}</MDXProvider>
  </>
);

export default MDXTheme;
