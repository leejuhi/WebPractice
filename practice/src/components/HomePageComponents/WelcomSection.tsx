import React from "react";
import ButtonArrow from "../ButtonArrow.tsx";
import styled from "@emotion/styled";
import backgroundImage from "../image/background.png";
import { css } from "@emotion/css";
type WelcomeSectionProps = {
  isMobile: boolean;
  scrollDown: () => void;
};

type BackGroundProps = {
  isMobile: boolean;
};

const BackGround = styled.div<BackGroundProps>`
  box-sizing: border-box;
  white-space: pre-line;
  width: 100%;
  height: calc(100vh - 70px);
  background: linear-gradient(#ffffff20, #ffffff00), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  font-size: ${({ isMobile }) => (isMobile ? `40px` : `60px`)};
  font-weight: 700;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  z-index: 0;
`;

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  isMobile,
  scrollDown,
}) => {
  return (
    <>
      <BackGround isMobile={isMobile}>
        {`주희의 작업 공간에 오신 것을 
환영합니다`}
        <a
          href="#intro"
          className={css`
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <ButtonArrow onClick={scrollDown} />
        </a>
      </BackGround>
    </>
  );
};

export default WelcomeSection;
