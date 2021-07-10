/** @format */

import Head from 'next/head'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Session from '../components/Session'

const HomeBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  #logo {
    width: 250px;
  }
`

export default function Home() {
  return (
    <HomeBox>
      <Head>
        <title>de_para: delivery camarada</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Session/>
      <Nav />
      <img
        src="/images/logodepara.svg"
        alt="Logotipo da aplicação de_para, com a ilustração de uma bicicleta formada por símbolos comunistas. O pneu dianteiro é similar à engrenagem de uma máquina, o traseiro é uma foice e o guidão o martelo."
        id="logo"
      />
    </HomeBox>
  )
}
