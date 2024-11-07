import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = styled.div<MenuProps>`
    position:fixed;
    width:calc(100%);
    height:59px;
    background-color:white;
    box-sizing: border-box;
    padding:0px 20px;
    font-size: 15px;
    font-weight:300;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${({isMove})=>(isMove?`border-bottom:1px solid #E6E8EA`:`box-shadow:none`)}
    `;
type MenuProps = {
    isMove: boolean;
};
const Space = styled.div`
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #e6e6e6;
    }
    padding: 10px 20px;
`;


type MobileMenuProps = {
    isOpen: boolean;
};

const MobileMenu = styled.div<MobileMenuProps>`
    box-sizing: border-box;
    background: white;
    color: black;
    position: absolute;
    top:50px; /* 상단바 바로 아래에 위치 */
    left: 0;
    right: 0;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-out;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: ${({ isOpen }) => (isOpen ? "10px 20px" : "0px 20px")};
`;



const NavBar:React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMove,setIsMove]=useState(false)
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
    useEffect(()=>{
        const handleScroll=()=>{
            setIsMove(window.scrollY>0);
        };
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[])
    return (
        <>
                {!isMobile ? (
                    <>
                    
                        <Menu isMove={isMove}>
                            <div className={css`padding: 10px;`}>사이트 이름</div>
                            <div className={css`display: flex; gap: 10px;`}>
                                <Space><Link to="/">홈페이지</Link></Space>
                                <Space><Link to="/activity">활동</Link></Space>
                                <Space><Link to="/recruit">지원하기</Link></Space>
                                <Space><Link to="/qna">문의</Link></Space>
                            </div>
                            <Space><Link to="/login">로그인</Link></Space>
                        </Menu>
                
                    
                    </>
                ) : (
                    <>
                    <div className={css`position:fixed;width:calc(100%);top:0;`}>
                        <Menu isMove={isMove}>
                            <div className={css`padding: 10px;`}>사이트 이름</div>
                            <button onClick={toggleMenu} className=
                            {css`padding: 10px; 
                                box-sizing:border-box; 
                                border:none;
                                background-color:white;
                                border-radius: 5px;
                                &:hover {
                                    background-color: #e6e6e6;
                                }`}>
                                메뉴
                            </button>
                        </Menu>
                        <MobileMenu isOpen={isMenuOpen}>
                                    <Space><Link to="/">홈페이지</Link></Space>
                                    <Space><Link to="/activity">활동</Link></Space>
                                    <Space><Link to="/recruit">지원하기</Link></Space>
                                    <Space><Link to="/qna">문의</Link></Space>
                                    <Space><Link to="/login">로그인</Link></Space>
                        </MobileMenu>
                    </div>
                    </>
                )}
            
        </>
    );
};

export default NavBar;