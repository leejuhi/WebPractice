import { Global, css } from "@emotion/react";
import fonts from "./font.ts"; // font.ts 파일의 설정을 가져옴
import React from "react";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${fonts}
      * {
        box-sizing: border-box;
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        font-size: 15px;
        font-weight: 300;
        color: black;
      }
      body {
        font-family: "Spoqa Han Sans Neo", "sans-serif";
        margin: 0px;
        margin-top: 70px;
        padding: 0;
        font-size: 15px;
        font-weight: 300;
        box-sizing: border-box;
        word-break: keep-all;
        white-space: pre-wrap;
      }

      input:focus {
        outline: none;
        border-bottom: 1px solid #037ffc;
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      a:visited {
        color: inherit;
      }
      button {
        border: none;
      }
    `}
  />
);

export default GlobalStyle;
