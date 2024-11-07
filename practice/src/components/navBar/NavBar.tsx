import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = styled.div<MenuProps>`
    position:fixed;
    z-index:3;
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
type SpaceProps={
    isMobile:boolean
}
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
    z-index:20;
    top:50px;
    left: 0;
    right: 0;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-out;
    display: flex;
    flex-direction: column;
    padding: 0px;
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
                            <div className={css`margin:auto`}>사이트 이름</div>
                            <div className={css`display: flex; gap: 10px;`}>
                                <Link to="/"><Space isMobile={false} >홈페이지</Space></Link>
                                <Link to="/activity"><Space isMobile={false}>활동</Space></Link>
                                <Link to="/recruit"><Space isMobile={false}>지원하기</Space></Link>
                                <Link to="/qna"><Space isMobile={false}>문의</Space></Link>
                            </div>
                            <div className={css`margin:auto`}><Link to="/login">로그인</Link></div>
                        </Menu>
                
                    
                    </>
                ) : (
                    <>
                    <div className={css`position:fixed;z-index:5;width:calc(100%);top:0;`}>
                        <Menu isMove={isMove}>
                            <div className={css`padding: 10px 0px;`}>사이트 이름</div>
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
                                    <Link to="/"><Space isMobile={isMobile} >홈페이지</Space></Link>
                                    <Link to="/activity"><Space isMobile={isMobile}>활동</Space></Link>
                                    <Link to="/recruit"><Space isMobile={isMobile}>지원하기</Space></Link>
                                    <Link to="/qna"><Space isMobile={isMobile}>문의</Space></Link>
                                    <Link to="/login"><Space isMobile={isMobile}>로그인</Space></Link>
                        </MobileMenu>
                    </div>
                    </>
                )}
            
        </>
    );
};

export default NavBar;