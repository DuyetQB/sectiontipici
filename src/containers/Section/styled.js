import styled from "styled-components";
import { media } from "styles/breakPoint";
export const MainSection = styled.div`
  background: url("http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/bg-image-1.jpg");
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50%;
  height: auto;
  width: 100vw;
`;

export const WrapText = styled.div`
  padding: 20px 40px;
  & h2 {
    ${media.smallPhone`
    padding-top:40px;
    `}
  }
`;
export const MenuList = styled.div`
  padding: 0px 40px;
  & > .row {
    border-top: 1px solid ${({ theme }) => theme.colors.blue3};
    padding-top: 1.5em;
    ${"" /* padding-bottom: 1.5em; */}
    & > div {
      padding: 0 15px 30px;
    }
  }
  & img {
    width: 70px;
    height: 70px;
  }
`;
export const IconInner = styled.div`
  display: flex;
  align-items: center;
`;
