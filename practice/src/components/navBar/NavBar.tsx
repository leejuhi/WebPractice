import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = styled.div`
    box-sizing: border-box;
    padding: 15px 50px;
    font-size: 18px;
    top: 0px;
    display: flex;
    justify-content: space-between;
`;

const Space = styled.div`
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
    &:hover {
        background-color: #e6e6e6;
    }
    padding: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }
`;

type MobileMenuProps = {
    isOpen: boolean;
};

const MobileMenu = styled.div<MobileMenuProps>`
    box-sizing:border-box;
    height:30px;
    background: white;
    z-index:1;
    color: black;
    postion: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: translateY(-1000%);
    transition: transform 0.6s ease-in-out;
    ${({ isOpen }) =>
        (isOpen? `transform: translateY(50%)`:`translateY(-1000%)`)};
`;

const NavBar:React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
                {!isMobile ? (
                    <>
                    <div className={css`position:fixed;width:calc(100%);`}>
                        <Menu>
                            <div className={css`padding: 10px;`}>사이트 이름</div>
                            <div className={css`display: flex; gap: 10px;`}>
                                <Space><StyledLink to="/">홈페이지</StyledLink></Space>
                                <Space><StyledLink to="/activity">활동</StyledLink></Space>
                                <Space><StyledLink to="/recruit">지원하기</StyledLink></Space>
                                <Space><StyledLink to="/qna">문의</StyledLink></Space>
                            </div>
                            <Space><StyledLink to="/login">로그인</StyledLink></Space>
                        </Menu>
                        <div
                            className={css`
                                display: flex;
                                justify-content: center;
                                margin: 0px 20px;
                                border-top: 1px solid #e6e6e6;
                                width: calc(100% - 40px);
                            `}
                        />
                    </div>
                    </>
                ) : (
                    <>
                        <Menu>
                            <div className={css`padding: 10px;`}>사이트 이름</div>
                            <button onClick={toggleMenu} className=
                            {css`padding: 10px; 
                                box-sizing:border-box; 
                                border:none; 
                                background-color:white;
                                border-radius: 20px;
                                font-size:15px;
                                &:hover {
                                    background-color: #e6e6e6;
                                }`}>
                                메뉴
                            </button>
                        </Menu>
                        <div
                            className={css`
                                display: flex;
                                justify-content: center;
                                margin: 0px 20px;
                                border-top: 1px solid #e6e6e6;
                                width: calc(100% - 40px);
                            `}
                        />
                    <MobileMenu isOpen={isMenuOpen}>
                            <div className={css`background-color:#FFFFFF;padding-left:50px;`}>
                                <Space><StyledLink to="/">홈페이지</StyledLink></Space>
                                <Space><StyledLink to="/activity">활동</StyledLink></Space>
                                <Space><StyledLink to="/recruit">지원하기</StyledLink></Space>
                                <Space><StyledLink to="/qna">문의</StyledLink></Space>
                                <Space><StyledLink to="/login">로그인</StyledLink></Space>
                            </div>
                    </MobileMenu>
                    </>
                )}
            
        </>
    );
};

export default NavBar;