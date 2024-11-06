import React from "react";
import NavBar from "../navBar/navBar.tsx";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const BackGround=styled.div`
    box-sizing:border-box;
    width:calc(100%);
    height: 100%;
    background:linear-gradient(white,#037ffc);
    display:flex;
    padding:100px;
    flex-direction:column;

`

const RecruitPage = () => {


    return (
       <>
        <NavBar/>
        <BackGround>
            <div className={css`font-size:60px;font-weight:800;margin-bottom:30px`}>모집이 마감 되었어요</div>
            <div className={css`font-size:25px; font-weight:100;`}>못 뽑아서 아쉽 아쉽 ㅜㅜ</div>
            <div className={css`font-size:25px; font-weight:100;`}>다음 신청을 노려주세요~~</div>
            <button className={css`width:150px;height:40px;margin-top:20px;background:black;color:white;border-radius:15px;font-size:15px`}>신청 접수 마감</button>
        
        </BackGround>

       </>
    );
};

export default RecruitPage;