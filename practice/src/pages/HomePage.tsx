import React from "react";
import NavBar from "../components/navBar/NavBar.tsx";
import styled from "@emotion/styled";
import ButtonArrow from "../components/ButtonArrow.tsx";
import backgroundImage from "../components/image/background.jpg"

const BackGround=styled.div`
    box-sizing:border-box;
    white-space: pre-line;
    width:100%;
    height:calc(100vh - 80px);
    background:linear-gradient(white,#7FBFF5BF),url(${backgroundImage});
    background-size: cover;
    background-position: center;
    display:flex;
    font-size:60px;
    font-weight:700;
    position:relative;
    flex-direction:column;
    align-items:center;
    text-align:center;
    padding-top:100px;
    z-index:0;

`
const BackGround2=styled.div`
    box-sizing:border-box;
    width:100%;
    height:calc(100vh - 60px);
    background:#f9fafb;
    padding:130px 0px;
    text-align:center;
    z-index:0;

`
const Text=styled.p`
    font-size:32px;
    font-weight:500;
    line-height:1.5;
`

const HomePage = () => {
    const scrollDown =()=>{
        const target=document.getElementById('target-element')
        if(target){
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 59,
                behavior: "smooth",
            });
        }
    }


    return (
       <>
        <NavBar />
        <BackGround >
            {`안녕하세요 !
            저는 이주희입니다!`}
            <ButtonArrow onClick={scrollDown} />
        </BackGround>
        <BackGround2 id="target-element">
            <Text>{`방가워요 저는 주희에요. 
제 모든 웹 사이트 만드는 기술을 여기서 확인하세요. 
연습이 끝나면 저는 발전 되어 있을 거에요.`}
                </Text>   
        </BackGround2>
        방가링
       </>
    );
};

export default HomePage;