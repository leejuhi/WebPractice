import React from 'react';
import styled from '@emotion/styled';

type ButtonArrowProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const ArrowButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px; /* 아이콘과 텍스트 간격 */

  svg {
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: rotate(270deg);
  }

  &:hover path {
    stroke-width: 15;
  }

  &:active path {
    stroke-width: 13;
    transition: all 100ms ease-in-out;
  }
`;

const ButtonArrow: React.FC<ButtonArrowProps> = ({ onClick, children }) => (
  <ArrowButton onClick={onClick}>
    <svg width="150px" height="150px" viewBox="-10 -50 80 180" xmlSpace="preserve">
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="8"
        d="M40,100 L0,40 L40,-20" // 화살표 모양
      />
    </svg>
    {children && <span>{children}</span>}
  </ArrowButton>
);

export default ButtonArrow;