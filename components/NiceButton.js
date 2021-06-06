import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 30vw;
  max-width: 180px;
  height: 160px;
  cursor: pointer;
  padding: 2rem 1rem;
  transition: all 0.3s;
  overflow: hidden;
  box-shadow: 0 5px 10px ${({ theme }) => theme.colors.meredithGrey};
  z-index: 1;

  :hover {
    background-color: rgba(255, 255, 255, 0.9);
    padding-top: 20px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryRed};
  }

  h2 {
    font: ${({ theme }) => theme.fonts.links};
    margin-top: 0.8rem;
  }
`

const Icon = styled.img`
  width: 3.4rem;
`

const NiceButton = React.forwardRef(({ onClick, href, icon, text }, ref) => {
  return (
    <Button>
      <a href={href} onClick={onClick} ref={ref}>
        <Icon src={icon} />
        <h2>{text}</h2>
      </a>
    </Button>
  )
})

export default NiceButton
