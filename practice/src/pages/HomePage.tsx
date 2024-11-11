import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import styled from "@emotion/styled";
import ButtonArrow from "../components/ButtonArrow.tsx";
import backgroundImage from "../components/image/background.png";
import mguImage1 from "../components/image/mockup.svg";
import mguImage2 from "../components/image/mockup2.svg";
import { css, keyframes } from "@emotion/css";

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
const BackGround = styled.div`
  box-sizing: border-box;
  white-space: pre-line;
  width: 100%;
  height: calc(100vh - 70px);
  background: linear-gradient(white, #e0f2f700), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  font-size: 60px;
  font-weight: 700;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  z-index: 0;
`;
const BackGround2 = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 60px);
  background: #f9fafb;
  padding: 130px 0px;
  text-align: center;
  z-index: 0;
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
`;

const HomePage = () => {
  const [isVisible, setVisible] = useState(false);
  const scrollDown = () => {
    const target = document.getElementById("target-element");
    if (target) {
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - 59,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById("target-element2");
      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= targetPosition - 59) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <BackGround>
        {`배경은 제가 만든
 미피입니당 귀엽져?`}
        <ButtonArrow onClick={scrollDown} />
      </BackGround>
      <BackGround2 id="target-element">
        <Text>
          {`방가워요 저는 주희에요. 
제 모든 웹 사이트 만드는 기술을 여기서 확인하세요. 
연습이 끝나면 저는 발전 되어 있을 거에요.`}
        </Text>
      </BackGround2>
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
            align-item: center;
            padding-top: 150px;
            width: 92%;
            max-width: 1140px;
          `}
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
                  font-size: 28px;
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
                  font-size: 50px;
                  font-weight: 500;
                  line-height: 1.4;
                `}
              >
                {`맛집 지도,
너랑만 나누고 싶은 
비밀`}{" "}
              </h2>
            </Item>
          </div>
          <div
            className={css`
              position: absolute;
              top: 300px;
              right: 80px;
              z-index: -1;
            `}
          >
            <Item isVisible={isVisible} delay={2}>
              <img
                src={mguImage1}
                alt="mgu1"
                className={css`
                  width: 400px;
                `}
              />
            </Item>
          </div>
          <div
            className={css`
              position: absolute;
              top: 600px;
              left: 0px;
              z-index: -1;
            `}
          >
            <Item isVisible={isVisible} delay={2.5}>
              <img
                src={mguImage2}
                alt="mgu2"
                className={css`
                  width: 400px;
                `}
              />
            </Item>
          </div>
          <div
            className={css`
              position: absolute;
              top: 1050px;
              right: 100px;
              width: 350px;
              z-index: -1;
            `}
          >
            <Item isVisible={isVisible} delay={2.5}>
              <div
                className={css`
                  font-size: 23px;
                  font-weight: 400;
                  line-height: 1.4;
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

export default HomePage;
