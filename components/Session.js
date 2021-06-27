/** @format */

import { signIn, signOut, useSession } from 'next-auth/client'
import styled from 'styled-components'
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'

const SessionBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryRed};

  #first {
    flex-grow: 2;
  }

  #icon {
    font-size: 2rem;
    cursor: pointer;
  }

  * {
    color: #ffffff;
    font: ${({ theme }) => theme.fonts.smallParagraph};
  }

  button {
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    vertical-align: middle;
    padding: 0;
    font-size: 1.2rem;
  }
`

export default function Session() {
  const [session, loading] = useSession()
  return (
    <SessionBar>
      {!session && (
        <>
          <p id="first">
            para sua conveniência, faça cadastro ou login antes de utilizar a
            aplicação.
          </p>
          <AiOutlineLogin onClick={() => signIn('auth0')} id='icon' />
        </>
      )}
      {session && (
        <>
          <p id="first">olá, camarada {session.user.name}!</p>
          <AiOutlineLogout onClick={() => signOut()} id='icon' />          
        </>
      )}
    </SessionBar>
  )
}
