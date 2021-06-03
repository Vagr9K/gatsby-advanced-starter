import styled, { css } from "styled-components";
import { Link } from "gatsby";
import Image from "../shared/Image";

import { Body, styles } from "../../theme";

type CardStyleProps = { hero?: boolean };

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  width: 100%;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 368px;

  @media (max-width: 500px) {
    height: 320px;
  }

  @media (max-width: 440px) {
    height: 270px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 8px;

  ${({ hero }: CardStyleProps) =>
    hero &&
    css`
      @media (min-width: 1100px) {
        grid-column: span 2;
        grid-template-columns: 6fr 4fr;
        grid-auto-flow: column;
        grid-gap: 32px;
      }
    `}
`;

export const ArticleHeader = styled.div`
  display: grid;
  grid-gap: 12px;

  align-items: flex-start;
  align-content: start;
`;

export const ArticleExcerpt = styled(Body)`
  display: -webkit-box;
  -webkit-line-clamp: ${({ hero }: CardStyleProps) => (hero ? 5 : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ArticleMeta = styled.div`
  display: grid;
  grid-gap: 12px;

  align-items: flex-start;
  align-content: start;
`;

export const Details = styled.div`
  display: grid;

  ${({ hero }: CardStyleProps) =>
    hero &&
    css`
      @media (min-width: 1100px) {
        align-content: space-between;
      }
    `}
`;

export const ReadButton = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);

  ${styles.ButtonLabel}

  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;

  justify-content: start;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;
