import React from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import styled from "@emotion/styled";
import ButtonArrow from "../components/ButtonArrow.tsx";

const BackGround=styled.div`
    box-sizing:border-box;
    width:100%;
    height:calc(100vh - 10px);
    background:linear-gradient(white,#7FBFF5);
    display:flex;
    font-size:60px;
    font-weight:600;
    position:relative;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding-bottom:200px;
    z-index:0;

`

const HomePage = () => {
    const scrollDown =()=>{
        window.scrollBy({
            top:window.innerHeight+100,
            behavior:'smooth'
        });
    }


    return (
       <>
        <NavBar />
        <BackGround >
            안녕하세용
            <ButtonArrow onClick={scrollDown} />
        </BackGround>
        <BackGround >
            방가워요
        </BackGround>
       </>
    );
};

export default HomePage;