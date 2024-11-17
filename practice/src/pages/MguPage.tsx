import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import mguImage1 from "../components/image/mockup1.svg";
import mguImage2 from "../components/image/mockup2.svg";
import mguImage3 from "../components/image/mockup3.svg";
import mguImage4 from "../components/image/mockup4.svg";
import mguImage5 from "../components/image/mockup5.svg";
import mguImage6 from "../components/image/mockup6.svg";
import mgu from "../components/image/mugou.svg";
import carrot from "../components/image/carrot.svg";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import NavBar2 from "../components/navBar/NavBar2.tsx";
import useIsMobile from "../components/hooks/useIsMobile.ts";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    
  }
`;
type ItemProps = {
  isVisible: boolean;
  delay: number;
};
const Item = styled.div<ItemProps>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible, delay }) =>
    isVisible ? `${fadeIn} ${delay}s forwards ease-out` : "none"};
`;

type Project1SectionProps = {
  isVisible: boolean;
  isMobile: boolean;
};
const MguPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();
  return (
    <>
      <NavBar2 />
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          className={css`
            position: relative;
            align-items: center;
            width: 92%;
            ${isMobile ? "" : `height: 1400px;`}
            max-width: 1140px;
          `}
          id="activity"
        >
          <div
            className={css`
              position: relative;
              margin: 0px auto;
              max-width: calc(100% - 60px);
              z-index: 0;
            `}
          >
            <Item isVisible={isVisible} delay={1}>
              <img
                className={css`
                  width: 300px;
                `}
                src={mgu}
                alt="mgulogo"
              />
              <img
                className={css`
                  position: absolute;
                  right: 80px;
                  top: 0px;
                  width: 180px;
                `}
                src={carrot}
                alt="logo"
              />
            </Item>
            <Item isVisible={isVisible} delay={1.5}>
              <h2
                className={css`
                  font-size: ${isMobile ? `25px` : `30px`};
                  font-weight: 500;
                  line-height: 1.4;
                  margin-top: 15px;
                  margin-bottom: 10px;
                `}
              >
                {isMobile ? `맛집 탐색 프로젝트` : `맛집 탐색 프로젝트`}
              </h2>
            </Item>
            <div
              className={css`
                font-size: 20px;
              `}
            >
              {`광고, 취향 차이에 지친 당신에게 
취향이 같은 사람의 진짜 맛집 지도를 교환해드립니다!`}
            </div>
            <div
              className={css`
                font-size: 25px;
                font-weight: 500;
                margin-top: 100px;
                line-height: 0.5;
              `}
            >
              회원가입 및 로그인
            </div>
            <p
              className={css`
                font-size: 20px;
              `}
            >
              회원가입을 한 후 회원 정보를 바탕으로 로그인을 할 수 있어요
            </p>
            <div
              className={css`
                display: flex;
              `}
            >
              <Item isVisible={isVisible} delay={2}>
                <img
                  src={mguImage3}
                  alt="mgu3"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
                <img
                  src={mguImage1}
                  alt="mgu1"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
              </Item>
            </div>
            <div
              className={css`
                font-size: 25px;
                font-weight: 500;
                margin-top: 60px;
                line-height: 0.5;
                text-align: right;
              `}
            >
              식당 관련 제공 기능
            </div>
            <p
              className={css`
                font-size: 20px;
                text-align: right;
                line-height: 1.3;
              `}
            >
              {`지도에 있는 식당을 클릭 시 사이트별 식당 평점 및 한줄평 제공
식당이 마음에 든다면 내 리스트에 추가!`}
            </p>
            <div
              className={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Item isVisible={isVisible} delay={2}>
                <img
                  src={mguImage4}
                  alt="mgu4"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
                <img
                  src={mguImage5}
                  alt="mgu5"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
              </Item>
            </div>
            <div
              className={css`
                font-size: 25px;
                font-weight: 500;
                margin-top: 60px;
                line-height: 0.5;
                text-align: center;
              `}
            >
              친구 목록 관련 기능
            </div>
            <p
              className={css`
                font-size: 20px;
                text-align: center;
                line-height: 1.3;
              `}
            >
              {`내 지도의 맛집을 바탕으로 친구 추천을 받을 수 있고
    친구요청을 보내거나 수락 혹은 거절할 수 있어요!`}
            </p>
            <div
              className={css`
                display: flex;
                justify-content: center;
                margin-right: 50px;
              `}
            >
              <Item isVisible={isVisible} delay={2}>
                <img
                  src={mguImage6}
                  alt="mgu6"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
              </Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MguPage;
