import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import restaurantsData from "../../public/data/restaurants";
import Header from "../../components/Header";
import Confirmation from "../../components/Confirmation";
import { List, RestaurantMenu } from "../../components/RestaurantMenu";
import Cart from "../../components/Cart";
import Session from "../../components/Session";

export default function Menu({ data }) {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const restaurant = data.find((r) => r.id === id);
  const { menu } = restaurant;

  const [cartItems, setCartItems] = useState([]);
  function handleAddToCart(clickedItem) {
    setCartItems((prev) => {
      return [...prev, { ...clickedItem }];
    });
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>{restaurant.name}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Session/>
      <Header title={restaurant.name} />
      <List>
        {menu
          ? menu.map((item) => (
              <RestaurantMenu
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            ))
          : "loading"}
      </List>
      <Cart cartItems={cartItems} setCartItems={setCartItems} setShowModal={setShowModal} />
      <Confirmation cartItems={cartItems} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "acaraje-do-largo" } },
    { params: { id: "uai-food" } },
    { params: { id: "caranguejo-de-ressaca" } },
    { params: { id: "na-larica" } },
    { params: { id: "sao-jorge" } },
    { params: { id: "siri-e-queijo" } },
    { params: { id: "pretensioso" } },
    { params: { id: "die-young" } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = restaurantsData;

  return { props: { data } };
}
