/** @format */

import { useRouter } from 'next/router'
import styled from 'styled-components'
import { IoReturnDownBack } from 'react-icons/io5'

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.4rem;

  #icon {
    vertical-align: middle;
    margin-right: 1.1rem;
    cursor: pointer;
  }
`

export const HeaderTitle = styled.h1`
  width: 80%;
  font: ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.primaryRed};
`

function Header(props) {
  const router = useRouter()
  return (
    <Bar>
      <HeaderTitle>
        <IoReturnDownBack onClick={() => router.back()} id='icon' />
        {props.title}
      </HeaderTitle>
    </Bar>
  )
}

export default Header
