import { signIn, signOut, useSession } from 'next-auth/client'
import styled from "styled-components";
import Head from "next/head";
import Session from '../components/Session'

export default function Order() {
  const [session, loading] = useSession()

    return (
      <>
        <Head>
          <title>Pedido confirmado!</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Session/>
        <h1>pedido enviado</h1>
      </>
    );
  }
  