import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

type ButtonArrowProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const pulseWidth = keyframes`
  0% {
    stroke-width: 10;
  }
  50% {
    stroke-width: 13;
  }
  100% {
    stroke-width: 10;
  }
`;


const ArrowButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px; 
  position:relative;
  z-index:100;
  svg {
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: rotate(270deg);
    filter: drop-shadow(1px 0px 2px rgba(0, 0, 0, 0.2));
    path{
        animation:${pulseWidth} 1.35s infinite ease-in-out;
    }
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
    <svg width="100px" height="100px" viewBox="-10 -50 80 180" xmlSpace="preserve">
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