import styled, { css } from "styled-components";

export const Heading1 = styled.h1`
  font-size: ${({ theme, size }) => size || theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
`;
export const Heading2 = styled.h2`
  font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.blue1};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
    ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
`;
export const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.blue1};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
`;
export const Text = styled.p`
  font-size: ${({ size, theme }) =>
    theme.fontSize[size] || theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.blue2};
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}

    ${({ isGrey }) =>
    isGrey &&
    css`
      color: ${({ theme }) => theme.colors.grey2};
    `}
    ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}

    ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`;
