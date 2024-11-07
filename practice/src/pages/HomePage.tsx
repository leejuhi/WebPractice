import React from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import styled from "@emotion/styled";

const BackGround=styled.div`
    box-sizing:border-box;
    width:calc(100%);
    height: 1000px;
    background:linear-gradient(white,#037ffc);
    display:flex;
    padding:100px;
    flex-direction:column;

`

const HomePage = () => {


    return (
       <>
        <NavBar/>
        <BackGround />
       </>
    );
};

export default HomePage;