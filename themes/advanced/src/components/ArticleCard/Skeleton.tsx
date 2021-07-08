import React from "react";
import styled, { keyframes } from "styled-components";

import { breakpoints } from "../../theme/Constants";

const SkeletonAnimation = keyframes`
  from {
      background-position: var(--loading-position);
  }
  to {
      background-position: var(--loading-position-end);
  }
`;

const SkeletonBlock = styled.div`
  background-color: var(--color-grey-300);
  border-radius: 4px;

  /* Loading animation gradient settings */
  --loading-gradient: linear-gradient(
    90deg,
    var(--color-grey-300) 0,
    rgba(254, 254, 254, 0.3) 45%,
    rgba(254, 254, 254, 0.3) 55%,
    var(--color-grey-300) 100%
  );
  --loading-size: 200px 100%;
  --loading-position: -67% 0;
  --loading-position-end: 200% 0;

  background-repeat: no-repeat;
  background-blend-mode: lighten;

  background-image: var(--loading-gradient);
  background-size: var(--loading-size);
  background-position: var(--loading-position);

  animation: ${SkeletonAnimation} 7s linear infinite;

  /* Disable the animation on slow devices or when the user requests reduced animation. */
  @media screen and (prefers-reduced-motion: reduce), (update: slow) {
    animation: unset;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const Cover = styled(SkeletonBlock)`
  border-radius: 10px;

  width: 100%;
  height: 344px;

  @media (max-width: 500px) {
    height: 296px;
  }
  @media (max-width: 440px) {
    height: 246px;
  }
`;

const Details = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const TitleSkeleton = styled(SkeletonBlock)`
  width: 70%;

  /* Tune loading gradient settings to match animation stages */
  --loading-position: -121% 0;
  --loading-position-end: 364% 0;

  height: 33px;

  @media (max-width: ${breakpoints.sm}) {
    height: 29px;
  }
`;

const ExcerptSkeleton = styled(SkeletonBlock)`
  width: 90%;

  /* Tune loading gradient settings to match animation stages */
  --loading-position: -75% 0;
  --loading-position-end: 223% 0;

  height: 18px;

  @media (max-width: ${breakpoints.sm}) {
    height: 16px;
  }
`;

const ArticleCardSkeleton = (): JSX.Element => (
  <Wrapper>
    <Cover />
    <Details>
      <TitleSkeleton /> <ExcerptSkeleton />
    </Details>
  </Wrapper>
);

export default ArticleCardSkeleton;
