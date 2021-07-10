/** @format */

import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Confirmation from '../../components/Confirmation'
import { List, RestaurantMenu } from '../../components/RestaurantMenu'
import Cart from '../../components/Cart'
import Session from '../../components/Session'
import Nav from '../../components/Nav'
import connectToDatabase from '../../utils/dbconnect'

export default function Menu({ data }) {
  const router = useRouter()
  const {
    query: { slug },
  } = router

  const restaurant = data.find(r => r.slug === slug)
  const { menu } = restaurant

  const [cartItems, setCartItems] = useState([])
  function handleAddToCart(clickedItem) {
    setCartItems(prev => {
      return [...prev, { ...clickedItem }]
    })
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>{restaurant.name}</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Session />
      <Nav />
      <Header title={restaurant.name} />
      <List>
        {menu
          ? menu.map(item => (
              <RestaurantMenu
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            ))
          : 'loading'}
      </List>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setShowModal={setShowModal}
      />
      <Confirmation
        cartItems={cartItems}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'acaraje-do-largo' } },
    { params: { slug: 'uai-food' } },
    { params: { slug: 'caranguejo-de-ressaca' } },
    { params: { slug: 'na-larica' } },
    { params: { slug: 'sao-jorge' } },
    { params: { slug: 'siri-e-queijo' } },
    { params: { slug: 'pretensioso' } },
    { params: { slug: 'die-young' } },
  ]

  return {
    paths,
    fallback: false,
  }
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
