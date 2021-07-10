/** @format */

import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/Header'
import Session from '../components/Session'
import Nav from '../components/Nav'

export const AboutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutContent = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  width: 80%;
  height: 100%;
  padding: 2.4rem 0;

  > p {
    font: ${({ theme }) => theme.fonts.paragraph};
    margin: 1.6rem auto;
  }
`

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre de_para | de_para: delivery camarada</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Session />
      <Nav />
      <Header title="Sobre o Projeto" />
      <AboutBox>
        <AboutContent>
          <h2>o problema que queremos atacar</h2>
          <p>
            Trabalho desregulamentado e precarizado, ausência total de vínculo
            empregatício, alta exposição ao Covid-19, falta de direitos básicos,
            algoritmos arbitrários de controle: essa é a realidade de um setor
            da informalidade que cresceu como nunca no ano de 2020 no Brasil - o
            nicho dos entregadores de aplicativo, trabalhadores que já vinham da
            informalidade ou perderam seus empregos em massa no ano da pandemia,
            que ainda segue arrasando o país sem o obstáculo de medidas públicas
            efetivas.
          </p>
          <p>
            Os entregadores de aplicativo estão submetidos ao jugo cruel das
            gigantes empresas de <em>delivery</em>, que, independentemente do
            quanto aumentem seus lucros sobretudo num momento em que as pessoas
            estão necessitando mais de serviços de entrega para evitar a
            exposição ao vírus, se recusam a reconhecer o óbvio vínculo
            empregatício que domina as relações entre Empresa e Entregador,
            baixam cada vez mais o valor da corrida, impõem bloqueios e
            desativações completamente arbitrárias e injustificadas,
            frequentemente passam a conta de prejuízos para o entregador, etc.
          </p>
          <p>
            A solução proposta é essencialmente uma alternativa, ainda que de
            complexidade vastamente menor, às grandes corporações de{' '}
            <em>delivery</em> que hoje sugam o valor produzido pelos
            trabalhadores aos quais não reconhece formalmente. Essa solução será
            escalável e pretendo que sirva de base para a adaptação e
            implementação futuras de uma cooperativa de <em>delivery</em>.
          </p>
        </AboutContent>
      </AboutBox>
    </>
  )
}
