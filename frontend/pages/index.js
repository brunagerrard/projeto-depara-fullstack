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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Landing />
    </>
  );
}
