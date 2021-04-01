import Head from "next/head";
import styled from "styled-components";
import Header from "../../components/Header";
import Restaurant from "../../components/Restaurant";
import restaurantsData from "../../public/data/restaurants";

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
`;

export default function Restaurants({ data }) {
  return (
    <>
      <Head>
        <title>Restaurantes</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header title="Restaurantes" />
      <List>
        {data.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </List>
    </>
  );
}

export async function getStaticProps() {
  const data = restaurantsData;

  return { props: { data } };
}
