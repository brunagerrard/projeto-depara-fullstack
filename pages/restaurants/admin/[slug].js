/** @format */

import { useRouter } from 'next/router'
import Head from 'next/head'
// import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import styled from 'styled-components'
// import Session from '../../../components/Session'
import fetcher from '../../../utils/fetcher'
import OrderHistory from '../../../components/OrderHistory'
import { HeaderTitle } from '../../../components/Header'
import { ProfileWrap, Title } from '../../profile'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { FaClipboardList } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'

export default function Profile() {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  // const [session, loading] = useSession()
  const { data, error } = useSWR(`/api/restaurants/${slug}`, fetcher, {
    refreshInterval: 5000,
  })
  const restData = data ? data.data : null

  if (error) {
    console.log(error)
  }

  if (restData) {
    console.log(restData)
  }

  return (
    <>
      {data ? (
        <>
          <Head>
            <title>{data.data.name}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="shortcut icon" href="/favicon.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
              rel="stylesheet"
            />
          </Head>
          <HeaderTitle style={{ textAlign: 'center', margin: '1.2rem auto 0' }}>
            {data.data.name} | Admin
          </HeaderTitle>

          <ProfileWrap style={{ marginTop: '0', paddingTop: '1rem' }}>
            <Tabs id="my-tabs">
              <TabList id="tabs-list">
                <Tab>
                  <p>Pedidos recebidos</p> <FaClipboardList className="icon" />
                </Tab>
                <Tab>
                  <p>Dados do restaurante</p> <IoIosSettings className="icon" />
                </Tab>
              </TabList>

              <TabPanel>
                {restData && <Title>últimos pedidos recebidos:</Title>}
                {restData && <OrderHistory restData={restData} />}
              </TabPanel>
              <TabPanel>
                <Title>Estamos construindo essa funcionalidade!</Title>
                <p style={{ marginTop: '1rem' }}>
                  Em breve você poderá editar cardápios, preços, endereços de
                  entrega e mais.
                </p>
                <img
                  src="../../../images/waiting.png"
                  style={{
                    width: '60vw',
                    maxWidth: '500px',
                    display: 'block',
                    margin: '1.1rem auto',
                  }}
                />
              </TabPanel>
            </Tabs>
          </ProfileWrap>
        </>
      ) : (
        ''
      )}
    </>
  )
}
