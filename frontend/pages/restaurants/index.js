import Head from "next/head";
import styled from "styled-components";
import Header from "../../src/components/Header";
import Restaurant from "../../src/components/Restaurant";

const List = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1rem;
  padding: 2rem 10%;
`;

export default function Restaurants({ data }) {
  return (
    <>
      <Head>
        <title>Restaurantes</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;1,600&family=Montserrat:wght@200;300;400&family=Poppins:wght@300;600&family=Ubuntu:ital,wght@1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header title="Restaurantes" />
      <List>
        {data.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant._id} />
        ))}
      </List>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8008/api/restaurants`);
  const data = await res.json();

  return { props: { data } };
}
