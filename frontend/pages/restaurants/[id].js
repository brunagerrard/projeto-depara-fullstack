import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../src/components/Header";

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
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8888/api/restaurants`);
  const data = await res.json();

  return { props: { data } };
}
