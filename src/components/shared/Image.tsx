import styled from "styled-components";

const Image = styled.img`
  object-fit: cover;

  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.1);

  border-radius: ${({ rounded }: { rounded?: boolean }) =>
    rounded ? "10px" : "0"};
`;

export default Image;
