import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import _ from "lodash";

import * as styles from "../../../theme";
import { ExtendingWrapper } from "../Spacing";
import { HeadingLink } from "../../Links";

export const Paragraph = undefined; // Default works fine

// Extract header hashlink from child components
const getHeaderHashLink = (children: React.ReactNode): string | null => {
  if (Array.isArray(children)) {
    return _.kebabCase(
      children.filter((child) => typeof child === "string").join()
    );
  }

  if (typeof children === "string") {
    return _.kebabCase(children);
  }

  return null;
};

type HeadingProps = {
  children: React.ReactNode;
};

type HeadingComponent = (props: HeadingProps) => JSX.Element;

// Create a heading component from the post slug and a styled heading component
const createHeading =
  (slug: string, HeadingComponent: AnyStyledComponent): HeadingComponent =>
  ({ children }: HeadingProps): JSX.Element => {
    const hashLink = getHeaderHashLink(children);

    return hashLink ? (
      <HeadingComponent id={hashLink}>
        <HeadingLink to={`${slug}#${hashLink}`}>{children} </HeadingLink>
      </HeadingComponent>
    ) : (
      <HeadingComponent>{children}</HeadingComponent>
    );
  };

type Headings = {
  H1: HeadingComponent;
  H2: HeadingComponent;
  H3: HeadingComponent;
  H4: HeadingComponent;
  H5: HeadingComponent;
  H6: HeadingComponent;
};

// Utility function to create and export all the heading components
export const createHeadings = (slug: string): Headings => ({
  H1: createHeading(slug, styles.H1),
  H2: createHeading(slug, styles.H2),
  H3: createHeading(slug, styles.H3),
  H4: createHeading(slug, styles.H4),
  H5: createHeading(slug, styles.H5),
  H6: createHeading(slug, styles.H6),
});

const BlockquoteStyle = styled.blockquote`
  padding: 0 16px;

  background-color: var(--color-grey-100);

  border-left: 8px solid var(--color-primary-300);
`;

type BlockquoteProps = {
  children?: React.ReactNode;
};

export const Blockquote = ({ children }: BlockquoteProps): JSX.Element => (
  <ExtendingWrapper>
    <BlockquoteStyle>{children}</BlockquoteStyle>
  </ExtendingWrapper>
);
