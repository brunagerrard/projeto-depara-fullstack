import Head from "next/head";
import Nav from "../src/components/Nav";
import Landing from "../src/components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>de_para</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;1,600&family=Montserrat:wght@200;300;400&family=Poppins:wght@300;600&family=Ubuntu:ital,wght@1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Landing />
    </>
  );
}
