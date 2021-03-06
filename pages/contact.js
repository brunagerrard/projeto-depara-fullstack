/** @format */

import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/Form'
import { AboutBox, AboutContent } from './about.js'
import Session from '../components/Session'
import Nav from '../components/Nav'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Entre em contato | de_para: delivery camarada</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Session />
      <Nav />
      <Header title='Olá, camarada ✊' />
      <AboutBox>
        <AboutContent>
          <h2>somos fortes quando estamos juntos. organize-se!</h2>
          <p>
            É entregador e tem interesse em formar uma cooperativa? Entre em
            contato pelo formulário abaixo.
          </p>
          <Form />
        </AboutContent>
      </AboutBox>
    </>
  )
}
