/** @format */

import Head from 'next/head'
import styled from 'styled-components'
import Header from '../../components/Header'
import Restaurant from '../../components/Restaurant'
import Session from '../../components/Session'
import Nav from '../../components/Nav'
import connectToDatabase from '../../utils/dbconnect'

const List = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 1rem;
  padding: 2rem 10%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
`

export default function Restaurants({ data }) {
  return (
    <>
      <Head>
        <title>Restaurantes | de_para: delivery camarada</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Session />
      <Nav />
      <Header title='Restaurantes' />
      <List>
        {data.map(restaurant => (
          <Restaurant restaurant={restaurant} key={restaurant.slug} />
        ))}
      </List>
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()
  const restaurantes = await db.collection('restaurantes').find({}).toArray()
  return {
    props: {
      data: JSON.parse(JSON.stringify(restaurantes)),
    },
  }
}
