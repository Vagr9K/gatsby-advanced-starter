import React, { useContext } from "react";

import { ConfigContext } from "gatsby-theme-advanced";

import { Body } from "../../theme";

import * as S from "./styles";

const AuthorSegment = (): JSX.Element | null => {
  const config = useContext(ConfigContext);

  if (!config.user) return null;

  const authorFullName = `${config.user.firstName} ${config.user.lastName}`;

  return (
    <S.Wrapper aria-label="About the author">
      <S.Main>
        <S.Avatar src={config.user.avatar} alt={authorFullName} />
        <S.Info>
          <S.AuthorName>{authorFullName}</S.AuthorName>
          <S.AboutText>
            <Body>{config.user.about}</Body>
          </S.AboutText>
        </S.Info>
      </S.Main>
      <S.Contact>
        <S.ShareLabel>Find me on</S.ShareLabel>
        <S.TightUserLinks />
      </S.Contact>
      <S.Separator />
    </S.Wrapper>
  );
};

export default AuthorSegment;
