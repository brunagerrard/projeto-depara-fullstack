import Head from "next/head";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import styled from "styled-components";

const HomeBox = styled.div`
  background: url("/images/entregador.png") no-repeat fixed left 40%;
  //TODO: CREDIT THE AUTHOR
  /* Photo by <a href="https://unsplash.com/@hnr_q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henrique Hanemann</a> on <a href="https://unsplash.com/s/photos/delivery-man?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   */
  background-size: cover;
  padding: 3vh 2vw 4.7vh;
  height: 100%;
`;

export default function Home() {
  return (
    <HomeBox>
      <Head>
        <title>de_para</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Landing />
    </HomeBox>
  );
}
