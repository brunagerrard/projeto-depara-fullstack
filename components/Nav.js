/** @format */

import styled from 'styled-components'
import Link from 'next/link'
import NiceButton from './NiceButton'
import { useSession } from 'next-auth/client'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavButtons = styled.div`
  width: 86vw;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: 900px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 50vw;
  }
`

export default function Nav() {
  const [session, loading] = useSession()

  return (
    <Container>
      <NavButtons>
        {session && (
          <Link href='/profile' passHref>
            <NiceButton text='perfil' icon='/images/person.png' />
          </Link>
        )}
        <Link href='/restaurants' passHref>
          <NiceButton text='pedir' icon='/images/burger.png' id='last' />
        </Link>
        <Link href='/contact' passHref>
          <NiceButton text='entregar' icon='/images/pin.png' />
        </Link>
        <Link href='/about' passHref>
          <NiceButton text='conhecer' icon='/images/magnifier.png' />
        </Link>
      </NavButtons>
    </Container>
  )
}
