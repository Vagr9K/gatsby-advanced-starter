import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import { styles, Caption } from "../../theme";

const Link = styled(GatsbyLink)`
  color: var(--color-primary);
  text-decoration: none;
`;

export const TagLink = styled(Link)`
  ${styles.Overline}

  text-transform: uppercase;

  &::before {
    content: "#";
  }
`;

export const CategoryLink = styled(Link)`
  ${styles.Caption}

  text-transform: capitalize;
`;

export const PostInfoCaption = styled(Caption)`
  color: var(--color-grey-700);
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
`;

export const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
