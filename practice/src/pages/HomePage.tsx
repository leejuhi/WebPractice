import React from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import styled from "@emotion/styled";

const BackGround=styled.div`
    box-sizing:border-box;
    width:100%;
    height:calc(100vh - 10px);
    background:linear-gradient(white,#C5E2FF);
    display:flex;
    font-size:60px;
    font-weight:600;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding-bottom:200px;

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
            <button onClick={scrollDown}>내려가기</button>
        </BackGround>
        <BackGround ></BackGround>
       </>
    );
};

export default HomePage;