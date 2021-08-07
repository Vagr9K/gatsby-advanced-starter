import styled, { css } from "styled-components";

export const ImageShadow = css`
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  object-fit: cover;

  ${ImageShadow}
`;

export default Image;
