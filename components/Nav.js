import styled from 'styled-components'
import Link from 'next/link'
import NiceButton from './NiceButton'

const NavButtons = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0 0 3rem;
`

export default function Nav() {
  return (
    <>
      <NavButtons>
        <Link href='/about' passHref>
          <NiceButton text='conhecer' icon='/images/magnifier.png' />
        </Link>
        <Link href='/contact' passHref>
          <NiceButton text='entregar' icon='/images/person.png' />
        </Link>
        <Link href='/restaurants' passHref>
          <NiceButton text='pedir' icon='/images/burger.png' />
        </Link>
      </NavButtons>
    </>
  )
}
