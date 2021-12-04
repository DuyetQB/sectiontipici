import React from "react";
import * as S from "./styled";
export const Heading1 = ({ children, ...rest }) => {
  return <S.Heading1 {...rest}>{children}</S.Heading1>;
};

export const Heading2 = ({ children, ...rest }) => {
  return <S.Heading2 {...rest}>{children}</S.Heading2>;
};
export const Heading3 = ({ children, ...rest }) => {
  return <S.Heading3 {...rest}>{children}</S.Heading3>;
};
export const Text = ({ children, ...rest }) => {
  return <S.Text {...rest}>{children}</S.Text>;
};
