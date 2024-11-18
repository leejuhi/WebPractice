import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile.ts";
import { IoClose, IoMenu } from "react-icons/io5";

const Menu = styled.div<MenuProps>`
  position: fixed;
  z-index: 3;
  width: calc(100%);
  height: 59px;
  background-color: white;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 300;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ isMove }) =>
    isMove ? `border-bottom:1px solid #E6E8EA` : `box-shadow:none`}
`;
type MenuProps = {
  isMove: boolean;
};
type SpaceProps = {
  isMobile: boolean;
};
const Space = styled.div<SpaceProps>`
  box-sizing: border-box;
  border: none;
  &:hover {
    background-color: #e6e6e6;
  }
  padding: ${({ isMobile }) => (isMobile ? `18px 20px` : `12px 10px`)};
  width: ${({ isMobile }) => (isMobile ? `100%` : `auto`)};
  border-radius: ${({ isMobile }) => (isMobile ? `0` : `8px`)};
`;

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = styled.div<MobileMenuProps>`
  box-sizing: border-box;
  background: white;
  color: black;
  position: absolute;
  z-index: 20;
  top: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  transition: max-height 0.3s ease-out;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

const NavBar2: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMove, setIsMove] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMove(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {!isMobile ? (
        <>
          <Menu isMove={isMove}>
            <div
              className={css`
                margin: auto;
              `}
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              주희넷
            </div>
            <div
              className={css`
                display: flex;
                gap: 10px;
                margin: auto;
              `}
            >
              <Link to="/" onClick={scrollToTop}>
                <Space isMobile={false}>홈페이지</Space>
              </Link>
              <a href="#intro">
                <Space isMobile={false}>소개</Space>
              </a>
              <a href="#activity">
                <Space isMobile={false}>프로젝트</Space>
              </a>
              <a href="#contact">
                <Space isMobile={false}>문의</Space>
              </a>
            </div>
          </Menu>
        </>
      ) : (
        <>
          <div
            className={css`
              position: fixed;
              z-index: 5;
              width: calc(100%);
              top: 0;
            `}
          >
            <Menu isMove={isMove}>
              <div
                className={css`
                  padding: 0px 20px;
                  cursor: pointer;
                `}
                onClick={scrollToTop}
              >
                주희넷
              </div>
              <button
                onClick={toggleMenu}
                className={css`
                  box-sizing: border-box;
                  border: none;
                  background-color: white;
                  cursor: pointer;
                  padding-right: 10px;
                `}
              >
                {isMenuOpen ? (
                  <IoClose size="25" fill="#919191" />
                ) : (
                  <IoMenu size="25" stroke="#919191" />
                )}
              </button>
            </Menu>
            <MobileMenu isOpen={isMenuOpen}>
              <Link to="/" onClick={scrollToTop}>
                <Space isMobile={true}>홈페이지</Space>
              </Link>
              <a href="#intro">
                <Space isMobile={true}>소개</Space>
              </a>
              <a href="#activity">
                <Space isMobile={true}>프로젝트</Space>
              </a>
              <a href="#contact">
                <Space isMobile={true}>문의</Space>
              </a>
            </MobileMenu>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar2;
