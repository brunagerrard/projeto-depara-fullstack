/** @format */

import { signIn, signOut, useSession } from 'next-auth/client'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

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
    margin-right: 0.8rem;
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
          <button onClick={() => signIn('auth0')}>
            <p
              style={{
                display: 'inline-block',
                width: '20px',
                marginRight: '20px',
                color: `${({ theme }) => theme.colors.primaryRed}`,
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faSignInAlt} title='login' />
            </p>
          </button>
        </>
      )}
      {session && (
        <>
          <p id="first">olá, camarada {session.user.name}!</p>
          <button onClick={() => signOut()}>
            <p
              style={{
                display: 'inline-block',
                width: '20px',
                marginRight: '20px',
                color: `${({ theme }) => theme.colors.primaryRed}`,
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} title='logout' />
            </p>
          </button>
        </>
      )}
    </SessionBar>
  )
}
