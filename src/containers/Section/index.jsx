import React from "react";
import * as S from "./styled";
import { Heading2, Text } from "components/common/Typo";
import { Heading3 } from "components/common/Typo/styled";
export default function Section() {
  return (
    <>
      <S.MainSection>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <S.WrapText>
              <Heading2 pt="105px" size="2em">
                Điểm khác biệt ở phòng khám chúng tôi
              </Heading2>
              <Text weight="700" margin="1em 0em 1.3em 0em">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>
            </S.WrapText>
            <S.MenuList>
              <div className="row">
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c1.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">
                      Tư vấn miễn phí
                    </Heading3>
                  </S.IconInner>
                </div>
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c2.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">
                      Giá cả phải chăng
                    </Heading3>
                  </S.IconInner>
                </div>
              </div>
            </S.MenuList>
            <S.MenuList>
              <div className="row">
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c3.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">
                      Bác sĩ chuyên môn giỏi
                    </Heading3>
                  </S.IconInner>
                </div>
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c4.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">
                      Nhân viên chuyên nghiệp
                    </Heading3>
                  </S.IconInner>
                </div>
              </div>
            </S.MenuList>
            <S.MenuList>
              <div className="row">
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c5.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">Phục vụ 24/7</Heading3>
                  </S.IconInner>
                </div>
                <div className="col-md-6">
                  <S.IconInner>
                    <img
                      src="http://mauweb.monamedia.net/valeo/wp-content/uploads/2019/09/icon-c6.png"
                      alt="icon"
                    />
                    <Heading3 padding="0em 0em 0em 1em">
                      Hơn 5000 khách hàng hài lòng
                    </Heading3>
                  </S.IconInner>
                </div>
              </div>
            </S.MenuList>
          </div>
        </div>
      </S.MainSection>
    </>
  );
}
