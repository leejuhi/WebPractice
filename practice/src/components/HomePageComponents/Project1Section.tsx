import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import mguImage1 from "../image/mockup.svg";
import mguImage2 from "../image/mockup2.svg";

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
const Project1Section: React.FC<Project1SectionProps> = ({
  isVisible,
  isMobile,
}) => {
  return (
    <>
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
        id={"target-element2"}
      >
        <div
          className={css`
            position: relative;
            align-items: center;
            padding-top: 150px;
            width: 92%;
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
              <h1
                className={css`
                  font-size: ${isMobile ? `18px` : `24px`};
                  font-weight: 500;
                  color: #fc6b02;
                `}
              >
                MUGOU
              </h1>
            </Item>
            <Item isVisible={isVisible} delay={1.5}>
              <h2
                className={css`
                  font-size: ${isMobile ? `25px` : `50px`};
                  font-weight: 500;
                  line-height: 1.4;
                  margin-top: 15px;
                `}
              >
                {isMobile
                  ? `맛집 지도, 너랑만 나누고 싶은 비밀`
                  : `맛집 지도,
너랑만 나누고 싶은 
비밀`}
              </h2>
            </Item>
          </div>
          <div
            className={css`
              display: flex;
            `}
          >
            <div
              className={css`
                position: ${isMobile ? `relative` : `absolute`};
                ${isMobile
                  ? ""
                  : `top: 300px;
                  right: 80px;`}
                z-index: -1;
              `}
            >
              <Item isVisible={isVisible} delay={2}>
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
                position: ${isMobile ? `relative` : `absolute`};
                ${isMobile
                  ? ""
                  : `top: 600px;
                  left: 0px;`}
                z-index: -1;
              `}
            >
              <Item isVisible={isVisible} delay={2.5}>
                <img
                  src={mguImage2}
                  alt="mgu2"
                  className={css`
                    width: ${isMobile ? `200px` : `400px`};
                  `}
                />
              </Item>
            </div>
          </div>
          <div
            className={css`
              position: ${isMobile ? `relative` : `absolute`};
              ${isMobile
                ? ""
                : `top: 1050px;
                  right: 100px;`}
              z-index: -1;
              width: 350px;
            `}
          >
            <Item isVisible={isVisible} delay={2.5}>
              <div
                className={css`
                  font-size: ${isMobile ? `18px` : `23px`};
                  font-weight: 400;
                  line-height: 1.4;
                  margin: 0px auto;
                  ${isMobile ? `max-width: calc(100% - 60px);` : ""}
                `}
              >{`머거유에서 
친구의 맛집 지도를 교환받아
친구가 알고 있는 맛집을 찾아보세요.
진짜 숨은 맛집을 발견 할거에요!
        `}</div>
            </Item>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project1Section;