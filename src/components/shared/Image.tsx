import styled from "styled-components";

type ImageProps = { rounded?: boolean | "slight" };

const Image = styled.img<ImageProps>`
  object-fit: cover;

  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.1);

  border-radius: ${({ rounded }) => {
    if (rounded) {
      if (rounded === "slight") {
        return "2px";
      }

      return "10px";
    }

    return "0";
  }};
`;

export default Image;
