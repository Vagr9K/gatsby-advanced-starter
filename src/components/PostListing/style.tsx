import styled from "styled-components";

export const PostListingContainer = styled.div`
  width: 100%;

  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export default PostListingContainer;
