import styled from "styled-components";

import UserLinks from "../UserLinks";
import { H3 } from "../../theme";
import BasicSeparator from "../shared/Separator";

const SM_BREAKPOINT = "500px";

export const Wrapper = styled.aside`
  padding: 0 16px;

  justify-self: center;

  display: grid;
  justify-items: center;
`;

export const Main = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 32px;
  justify-items: center;

  @media (max-width: ${SM_BREAKPOINT}) {
    grid-auto-flow: row;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-gap: 16px;

  align-content: flex-start;

  justify-content: flex-start;

  @media (max-width: ${SM_BREAKPOINT}) {
    grid-auto-flow: row;

    justify-content: center;
  }
`;

export const Contact = styled.div`
  margin-top: 8px;

  display: grid;

  grid-auto-flow: column;
  grid-gap: 24px;

  align-items: center;
  align-content: center;

  @media (max-width: ${SM_BREAKPOINT}) {
    margin-top: 32px;

    grid-auto-flow: row;
    grid-gap: 8px;
    justify-content: center;
    justify-items: center;
  }
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;

  border-radius: 50%;
  overflow: hidden;
`;

export const ShareLabel = styled(H3)`
  color: var(--color-grey-600);

  line-height: 100%;
`;

export const AuthorName = styled(H3)`
  color: var(--color-primary);

  &::before {
    content: "by ";
    color: var(--color-grey-300);
  }
`;

export const AboutText = styled.div`
  width: 0;
  min-width: 100%;

  align-self: center;

  @media (max-width: ${SM_BREAKPOINT}) {
    & > p {
      text-align: justify;
    }
  }
`;

export const TightUserLinks = styled(UserLinks)`
  grid-gap: 12px;
`;

export const Separator = styled(BasicSeparator)`
  margin-top: 8px;
`;
