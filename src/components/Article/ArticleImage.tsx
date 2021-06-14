import React from "react";
import styled, { css } from "styled-components";

import Image from "../shared/Image";
import { Caption } from "../../theme";

type FigureProps = {
  noMargins?: boolean;
};

const Figure = styled.figure<FigureProps>`
  width: 100%;

  ${({ noMargins }) =>
    !noMargins
      ? css`
          margin-top: 24px;
          margin-bottom: 24px;
        `
      : ""}

  display: grid;
  grid-gap: 8px;
  justify-items: center;
`;

const CoverImage = styled(Image)`
  max-width: 100%;
`;

const FigCaption = styled.figcaption`
  ${Caption};

  color: var(--color-grey-700);
`;

type ArticleImageProps = {
  src?: string;
  caption?: string;
  noMargins?: boolean;
};

const ArticleImage = ({
  src,
  caption,
  noMargins,
}: ArticleImageProps): JSX.Element => (
  <Figure noMargins={noMargins}>
    <CoverImage src={src} alt={caption} />
    <FigCaption>{caption}</FigCaption>
  </Figure>
);

export default ArticleImage;
