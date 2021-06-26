import React from "react";
import styled, { css } from "styled-components";

import SharedImage from "../shared/Image";
import { styles } from "../../theme";

import { ARTICLE_WIDTH } from "./Spacing";

type FigureProps = {
  cover?: boolean;
};

const Figure = styled.figure<FigureProps>`
  display: grid;
  grid-gap: 8px;
  justify-items: center;

  width: 100%;

  ${({ cover }) =>
    cover
      ? css`
          /* Limit cover image heights */
          & > img {
            max-height: 700px;
            min-height: 300px;
          }
        `
      : css`
          /* Change width and padding based on screen size */
          @media (min-width: ${ARTICLE_WIDTH}) {
            padding: 0 16px;

            /* Slightly round image corners */
            & > img {
              border-radius: 2px;
            }

            max-width: ${ARTICLE_WIDTH};
          }
        `}
`;

const Img = styled(SharedImage)`
  max-width: 100%;
`;

const FigCaption = styled.figcaption`
  ${styles.Caption}

  color: var(--color-grey-700);
`;

type ImageProps = {
  src?: string;
  caption?: string;
  title?: string;
  alt?: string;
  cover?: boolean;
};

const Image = ({
  src,
  caption,
  alt,
  title,
  cover,
}: ImageProps): JSX.Element => (
  <Figure cover={cover}>
    <Img src={src} alt={alt || caption || title} />
    <FigCaption>{caption || title || alt}</FigCaption>
  </Figure>
);

export default Image;
