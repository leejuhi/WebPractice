import React from "react";
import NavBar from "../navBar/NavBar.tsx";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const QnA=styled.div`
    margin:80px;
    padding:30px 60px;
    display:flex;
    font-size:30px;
    font-weight:500;
    flex-direction: column;
    gap:15px;

`
const Question = styled.input`
    box-sizing:border-box;
    border:none;
    border-bottom: 1px solid #e6e6e6;
    font-size:20px;
    font-weight:300;
    height:30px;
    width:600px;
    padding:5px;
`
const QuestionBox=styled.div`
    font-size:20px;
    font-weight:100;
    margin: 50px 0px;
    display:flex;
    flex-direction:column;
    gap:15px;
`
const Questions=styled.div`
    font-size:20px;
    font-weight:100;

`

const QnaPage = () => {

    return (
       <>
        <NavBar/>
        <QnA>
            자주 묻는 질문
            <div className={css`display:flex;font-size:20px;font-weight:100px;`}><Question /> </div>
            <QuestionBox>
                <Questions>Q.악기를 못 다뤄도 동아리에 들어갈 수 있나요?</Questions>
                <Questions>Q.회비는 얼마인가요?</Questions>
                <Questions>Q.교습이 따로 존재하나요?</Questions>
            </QuestionBox>
        </QnA>
       </>
    );
};

export default QnaPage;