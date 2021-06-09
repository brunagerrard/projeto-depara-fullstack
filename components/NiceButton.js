/** @format */

import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryRed};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  width: 40vw;
  max-width: 180px;
  height: 160px;
  cursor: pointer;
  padding: 2rem 1rem;
  transition: all 0.2s;
  overflow: hidden;
  box-shadow: 0 5px 10px ${({ theme }) => theme.colors.meredithGrey};
  z-index: 1;

  @media (max-width: 350px) {
    width: 100%;
    max-width: 100%;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.9);
    padding-top: 25px;
    box-shadow: 0 5px 10px 5px ${({ theme }) => theme.colors.meredithGrey};
  }

  h1 {
    font: ${({ theme }) => theme.fonts.links};
    font-size: 1.1rem;
    margin-top: 0.8rem;
    transition: transform 0.2s;
  }

  :hover h1 {
    transform: scale(1.1);
  }

  :first-of-type {
    animation: float 3s 2s 2;
  }
  :nth-of-type(2) {
    animation: float 3s 3s 2;
  }
  :nth-of-type(3) {
    animation: float 3s 4s 2;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const Icon = styled.img`
  width: 3.4rem;
`

const NiceButton = React.forwardRef(({ onClick, href, icon, text }, ref) => {
  return (
    <Button href={href} onClick={onClick} ref={ref}>
      <Icon src={icon} />
      <h1>{text}</h1>
    </Button>
  )
})

export default NiceButton
