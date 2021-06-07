/** @format */

import { useRouter } from 'next/router'
import styled from 'styled-components'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
`

const HeaderTitle = styled.h1`
  width: 80%;
  font: ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.primaryRed};
`

function Header(props) {
  const router = useRouter()
  return (
    <Bar>
      <HeaderTitle>
        <p
          style={{
            display: 'inline-block',
            width: '20px',
            marginRight: '20px',
            color: `${({ theme }) => theme.colors.primaryRed}`,
            cursor: 'pointer',
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => router.back()} />
        </p>
        {props.title}
      </HeaderTitle>
    </Bar>
  )
}

export default Header
