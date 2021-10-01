/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import { Body } from "../../theme";

import * as S from "./styles";

const AuthorSegment = (): JSX.Element | null => {
  const config = useConfig();

  if (!config.user) return null;

  const authorFullName = `${config.user.firstName} ${config.user.lastName}`;

  return (
    <S.Wrapper aria-label="Sobre o autor">
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
        <S.ShareLabel>Siga-me</S.ShareLabel>
        <S.TightUserLinks />
      </S.Contact>
      <S.Separator />
    </S.Wrapper>
  );
};

export default AuthorSegment;
