import styled, { css } from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

import { Body, constants } from "../../theme";
import { ImageShadow } from "../shared/Image";

type CardStyleProps = { hero?: boolean };

export const Cover = styled(GatsbyImage)`
  width: 100%;
  height: 368px;

  /* Tune the height on smaller screen resolutions */
  @media (max-width: 500px) {
    height: 320px;
  }

  @media (max-width: 440px) {
    height: 270px;
  }

  & img {
    ${ImageShadow}
    border-radius: 10px;
  }
`;

export const Wrapper = styled.div<CardStyleProps>`
  display: grid;
  grid-gap: 8px;

  ${({ hero }) =>
    hero &&
    css`
      @media (min-width: ${constants.breakpoints.lg}) {
        grid-column: span 2;
        grid-template-columns: 6fr 4fr;
        grid-gap: 32px;
      }
    `}
`;

export const Header = styled.div`
  display: grid;
  grid-gap: 12px;

  align-items: flex-start;
  align-content: start;
`;

export const Excerpt = styled(Body)<CardStyleProps>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ hero }) => (hero ? 5 : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Meta = styled.div`
  display: grid;
  grid-gap: 12px;

  align-items: flex-start;
  align-content: start;
`;

export const Details = styled.div<CardStyleProps>`
  display: grid;

  ${({ hero }) =>
    hero &&
    css`
      @media (min-width: var(--breakpoint-lg)) {
        align-content: space-between;
      }
    `}
`;
