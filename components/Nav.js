/** @format */

import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { IoFastFood, IoHome } from 'react-icons/io5'
import { RiMotorbikeFill } from 'react-icons/ri'
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa'

const NavButtons = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  color: #ffffff;

  .active {
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.primaryRed};
  }

  .icon {
    box-sizing: content-box;
    padding: 0.6rem 0;
    width: 100%;
    font-size: 1.4rem;
    cursor: pointer;

    :hover {
      background-color: #ffffff;
      color: ${({ theme }) => theme.colors.primaryRed};
    }
  }
`

export default function Nav() {
  const [session, loading] = useSession()
  const router = useRouter()

  return (
    <NavButtons>
      <Link href="/">
        <IoHome className={router.pathname === '/' ? 'active icon' : 'icon'} />
      </Link>
      {session && (
        <Link href="/profile">
          <FaUserCircle className={router.pathname === '/profile' ? 'active icon' : 'icon'} />
        </Link>
      )}
      <Link href="/restaurants">
        <IoFastFood className={router.pathname === '/restaurants' ? 'active icon' : 'icon'} />
      </Link>
      <Link href="/contact">
        <RiMotorbikeFill className={router.pathname === '/contact' ? 'active icon' : 'icon'} />
      </Link>
      <Link href="/about">
        <FaInfoCircle className={router.pathname === '/about' ? 'active icon' : 'icon'} />
      </Link>
    </NavButtons>
  )
}
