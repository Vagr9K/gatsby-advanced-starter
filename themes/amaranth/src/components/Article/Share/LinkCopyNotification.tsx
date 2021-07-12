import React from "react";
import styled, { keyframes, css } from "styled-components";

import { Caption } from "../../../theme";

const popUpStartState = css`
  bottom: 0px;
  opacity: 0;
`;

const popUpEndState = css`
  bottom: 32px;
  opacity: 1;
`;

const popUpAnimation = keyframes`
  from {
    ${popUpStartState}
  }

  10% {
    ${popUpEndState}
  }

  to {
    ${popUpEndState}
  }
`;

const reducedPopUpAnimation = keyframes`
  from {
    ${popUpEndState}
  }

  to {
    ${popUpEndState}
  }
`;

const PopUp = styled.div`
  padding: 8px 16px;

  position: fixed;

  max-width: 90%;

  z-index: 9999;

  left: 50%;
  transform: translateX(-50%);

  color: var(--color-inverted-text);
  background-color: var(--color-inverted-background);

  border-radius: 6px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px rgba(0, 0, 0, 0.2);

  animation: ${popUpAnimation} ease-out 3s;
  animation-direction: alternate;
  animation-iteration-count: 2;
  animation-fill-mode: both;

  @media screen and (prefers-reduced-motion: reduce), (update: slow) {
    animation: ${reducedPopUpAnimation} step-end 3s;
  }
`;

type SnackbarProps = {
  onAnimationEnd?: () => void;
};

const LinkCopyNotification = ({
  onAnimationEnd,
}: SnackbarProps): JSX.Element => (
  <PopUp onAnimationEnd={onAnimationEnd}>
    <Caption>Link copied to clipboard</Caption>
  </PopUp>
);

export default LinkCopyNotification;
