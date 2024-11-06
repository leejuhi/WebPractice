
import React from "react";
import styled from "@emotion/styled"
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import NavBar from "../navBar/NavBar.tsx";

const Container = styled.div`
    margin:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
`
const LoginInput = styled.input`
    box-sizing:border-box;
    border:none;
    border-bottom:1px solid #e6e6e6;
    font-size:15px;
    width:300px;
    height:50px;

`
const LoginPage=()=>{
    return(
        <>
        <NavBar />
            <Container>
                <LoginInput type="email" id="email" name="email" placeholder="이메일"/>
                <LoginInput type="password" id="password" name="password" placeholder="비밀번호"/>
                <button className={css`
                    box-sizing:border-box;
                    border:none;
                    border-radius:5px;
                    font-size:15px; 
                    font-weight:400;
                    background-color:#037ffc;
                    color:#FFFFFF;
                    width:300px;
                    height:40px;
                    `}><Link to='/'>로그인</Link></button>
            </Container>
        </>
    );
}
export default LoginPage;