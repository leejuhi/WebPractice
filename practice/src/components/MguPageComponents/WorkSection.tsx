import styled from "@emotion/styled";
import React from "react";
import chick from "../image/chick.svg";
import swift from "../image/Logos/swift.svg";
import typescript from "../image/Logos/typescript.svg";
import javascript from "../image/Logos/javascript.svg";
import { css } from "@emotion/css";
import { FaGithub } from "react-icons/fa6";

type BackGroundProps = {
  isMobile: boolean;
};

const BackGround2 = styled.div<BackGroundProps>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  background: #f9fafb;
  padding: 130px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;
  font-size: ${({ isMobile }) => (isMobile ? `24px` : `32px`)};
  font-weight: 500;
  line-height: 1.5;
`;
type IntroSecitonProps = {
  isMobile: boolean;
};
const WorkSeciton: React.FC<IntroSecitonProps> = ({ isMobile }) => {
  return (
    <>
      <BackGround2 id="intro" isMobile={isMobile}>
        <img
          src={chick}
          alt="chick"
          className={css`
            width: 150px;
            margin-right: 20px;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin: 25px;
            gap: 5px;
            text-align: left;
            font-size: 30px;
            font-weight: 500;
          `}
        >
          이주희
          <div
            className={css`
              font-size: 18px;
              color: #848484;
            `}
          >
            홍익대학교 컴퓨터공학과
          </div>
          <div>
            <FaGithub />
            <a href="https://github.com/leejuhi"> 바로가기 </a>
          </div>
          <div
            className={css`
              font-size: 20px;
              font-weight: 300;
            `}
          >
            <div
              className={css`
                margin-top: 10px;
              `}
            >
              사용 언어
            </div>
            <div
              className={css`
                display: flex;
                gap: 10px;
              `}
            >
              <img
                src={swift}
                alt="react"
                className={css`
                  width: 60px;
                `}
              />
              <img
                src={javascript}
                alt="javascript"
                className={css`
                  width: 60px;
                `}
              />
              <img
                src={typescript}
                alt="typescript"
                className={css`
                  width: 60px;
                `}
              />
            </div>
          </div>
        </div>
      </BackGround2>
    </>
  );
};

export default WorkSeciton;
