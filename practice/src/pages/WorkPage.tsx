import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import mgu from "../components/image/mugou.svg";
import carrot from "../components/image/carrot.svg";
import NavBar2 from "../components/navBar/NavBar2.tsx";
import useIsMobile from "../components/hooks/useIsMobile.ts";
import { SiNotion } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const WorkPage = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar2 />
      <div
        className={css`
          display: flex;
          justify-content: center;
          width: 100%;
        `}
      >
        <div
          className={css`
            position: relative;
            align-items: center;
            width: 92%;
            max-width: 1140px;
          `}
          id="activity"
        >
          <div
            className={css`
              position: relative;
              margin: auto;
              max-width: calc(100% - 60px);
              z-index: 0;
            `}
          >
            <img
              className={css`
                width: ${isMobile ? `200px` : `300px`};
              `}
              src={mgu}
              alt="mgulogo"
            />
            <img
              className={css`
                position: absolute;
                right: 0px;
                top: 0px;
                height: 130px;
                width: ${isMobile ? `100px` : `160px`};
              `}
              src={carrot}
              alt="logo"
            />

            <div>
              <h2
                className={css`
                  font-size: ${isMobile ? `20px` : `30px`};
                  font-weight: 500;
                  line-height: 1.4;
                  margin-top: 15px;
                  margin-bottom: 10px;
                `}
              >
                맛집 탐색 프로젝트 (5인){" "}
                <IoIosArrowDown
                  onClick={toggleMenu}
                  className={css`
                    position: absolute;
                    top: ${isMobile ? `100px` : `145px`};
                    left: ${isMobile ? `210px` : `320px`};
                    cursor: pointer;
                    transition: transform 0.3s ease;
                    ${isMenuOpen ? `transform:rotate(180deg);` : ""}
                  `}
                  size={isMobile ? "40" : "50"}
                />
              </h2>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  overflow: hidden;
                  max-height: ${isMenuOpen ? "400px" : "0px"};
                  transition: max-height 0.3s ease-out;
                `}
              >
                <div
                  className={css`
                    font-size: 20px;
                    font-weight: 400;
                  `}
                >
                  기간
                </div>
                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  - 2024.07~2024.08
                </div>
                <div
                  className={css`
                    font-size: 20px;
                    font-weight: 400;
                  `}
                >
                  담당 페이지
                </div>
                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  - 친구 기능 관련 페이지, 프로필 관련 페이지, 로그인 및
                  회원가입 기능 페이지
                </div>
                <div
                  className={css`
                    font-size: 20px;
                    font-weight: 400;
                  `}
                >
                  사용 기술 도구
                </div>

                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  - 프론트엔드: React, Vite, Styled-components, TypeScript,
                  Axios(Api 호출)
                </div>
                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  - 배포: Vercel
                </div>
                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  - 기타: ESLint, Prettier
                </div>
                <div
                  className={css`
                    font-size: 20px;
                    font-weight: 400;
                  `}
                >
                  협업 도구
                </div>
                <div
                  className={css`
                    font-size: 18px;
                    font-weight: 300;
                  `}
                >
                  -{" "}
                  <a href="https://www.notion.so/deprecated-2024-1-c2d57ff03d21483a995e382706bc0ada?p=36ea63a138d14813a5ce0d6889881fcf&pm=c">
                    <SiNotion size="20" />
                  </a>
                  ,{" "}
                  <a href="https://github.com/GDSC-Hongik/MGU-Yulliy-web">
                    <FaGithub size="20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkPage;
