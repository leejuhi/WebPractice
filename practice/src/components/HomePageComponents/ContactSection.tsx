import { css } from "@emotion/css";
import React from "react";
import { IoIosMail } from "react-icons/io";

const ContactSection: React.FC = () => {
  return (
    <>
      <div
        id="contact"
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            font-size: 40px;
            font-weight: 500;
          `}
        >
          연락처
        </div>
        <div
          className={css`
            display: flex;
            margin: 10px;
          `}
        >
          <IoIosMail size="30" />{" "}
          <div
            className={css`
              margin: 3.5px;
              font-size: 20px;
            `}
          >
            anim0203@naver.com
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactSection;
