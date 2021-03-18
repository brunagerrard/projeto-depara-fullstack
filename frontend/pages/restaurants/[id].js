import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import restaurantsData from "../../public/data/restaurants";

export default function Menu({ data }) {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const restaurant = data.find((r) => r._id === id);
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
      <h1>{restaurant.cuisine}</h1>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
    { params: { id: "5" } },
    { params: { id: "6" } },
    { params: { id: "7" } },
    { params: { id: "8" } },
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
