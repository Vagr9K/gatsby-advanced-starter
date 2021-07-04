import React from "react";
import styled, { css } from "styled-components";

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import SharedImage, { ImageShadow } from "../shared/Image";
import { styles } from "../../theme";

import { ARTICLE_WIDTH } from "./Spacing";

export const ArticleImageSpacing = css`
  /* Change width and padding based on screen size */
  @media (min-width: ${ARTICLE_WIDTH}) {
    padding: 0 16px;

    /* Slightly round image corners */
    & > img {
      border-radius: 2px;
    }

    max-width: ${ARTICLE_WIDTH};
  }
`;

type FigureProps = {
  cover?: boolean;
};

const Figure = styled.figure<FigureProps>`
  display: grid;
  grid-gap: 8px;
  justify-items: center;

  width: 100%;

  /* Apply spacing depending on type */
  ${({ cover }) => (!cover ? ArticleImageSpacing : "")}
`;

const Img = styled(SharedImage)`
  max-width: 100%;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  max-width: 100%;

  /* Limit cover image heights */
  max-height: 700px;
  min-height: 300px;

  & img {
    ${ImageShadow}
  }
`;

export const FigCaptionCss = css`
  ${styles.Caption}

  color: var(--color-grey-700);
`;

const FigCaption = styled.figcaption`
  ${styles.Caption}

  color: var(--color-grey-700);
`;

type ImageProps = {
  src?: string;
  title?: string;
  alt: string;
};

export const Image = ({ src, alt, title }: ImageProps): JSX.Element => (
  <Figure>
    <Img src={src} alt={alt} />
    <FigCaption>{title || alt}</FigCaption>
  </Figure>
);

type CoverImageProps = {
  image: IGatsbyImageData;
  alt: string;
};

export const CoverImage = ({ image, alt }: CoverImageProps): JSX.Element => (
  <Figure cover>
    <StyledGatsbyImage image={image} alt={alt} />
    <FigCaption>{alt}</FigCaption>
  </Figure>
);

export default Image;
