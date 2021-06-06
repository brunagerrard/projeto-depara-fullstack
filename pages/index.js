import Head from 'next/head'
import Nav from '../components/Nav'
import Landing from '../components/Landing'
import styled from 'styled-components'

const HomeBox = styled.div`
  padding: 3vh 2vw 4.7vh;
  height: 100%;
`

export default function Home() {
  return (
    <HomeBox>
      <Head>
        <title>de_para</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='shortcut icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Landing />
      <Nav />
    </HomeBox>
  )
}
