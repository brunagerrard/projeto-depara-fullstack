import styled from 'styled-components'
import Link from 'next/link'
import NiceButton from './NiceButton'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavButtons = styled.div`
  width: 86vw;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 900px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 50vw;
  }
`

export default function Nav() {
  return (
    <Container>
      <NavButtons>
        <Link href='/about' passHref>
          <NiceButton text='conhecer' icon='/images/magnifier.png' />
        </Link>
        <Link href='/contact' passHref>
          <NiceButton text='entregar' icon='/images/person.png' />
        </Link>
        <Link href='/restaurants' passHref>
          <NiceButton text='pedir' icon='/images/burger.png' id='last' />
        </Link>
      </NavButtons>
    </Container>
  )
}
