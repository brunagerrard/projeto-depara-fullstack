import { useRouter } from "next/router";
import Header from "../../src/components/Header";

export default function Menu({ data }) {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const restaurant = data.find((r) => r._id === id);
  return (
    <>
      <Header title={restaurant.name} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8008/api/restaurants`);
  const data = await res.json();

  return { props: { data } };
}
