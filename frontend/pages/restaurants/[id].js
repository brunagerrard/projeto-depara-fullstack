import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../src/components/Header";
import restaurantsData from '../../public/data/restaurants'

export default function Menu() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const restaurant = restaurantsData.find((r) => r._id === id);

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
      <Header title={restaurant.name} />
    </>
  );
}