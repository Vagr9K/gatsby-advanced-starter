import React from "react";
import styled from "styled-components";

import { Types } from "gatsby-theme-advanced";

import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXTheme from "./MdxTheme";

import { WrapperCss } from "./Spacing";

const Wrapper = styled.article`
  width: 100%;
  max-width: 100%;

  overflow-x: auto;

  /* Center and space child elements */
  & > * {
    margin-bottom: 24px;
    margin-right: auto;
    margin-left: auto;
  }

  /* Apply generic width rules to everything except images, separators and containers */
  & > *:not(figure, div, hr) {
    ${WrapperCss}
  }

  /* Apply margins for headings */
  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 36px;
    margin-bottom: 16px;
  }

  /* Remove bottom margin from the last child */
  & > *:last-child {
    margin-bottom: 0px;
  }
`;

type RenderProps = {
  post: Types.Post;
};

const Render = ({ post }: RenderProps): JSX.Element => {
  if (!post.body)
    throw Error(
      `Render: post data doesn't contain MDX body for rendering. Aborting. Post slug: ${post.slug}`
    );

  return (
    <Wrapper>
      <MDXTheme post={post}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXTheme>
    </Wrapper>
  );
};

export default Render;
