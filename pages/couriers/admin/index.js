/** @format */

import Head from 'next/head'
// import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import styled from 'styled-components'
// import Session from '../../../components/Session'
import Header from '../../../components/Header'
import fetcher from '../../../utils/fetcher'
import OrderHistory from '../../../components/OrderHistory'
import { HeaderTitle } from '../../../components/Header'
import { ProfileWrap, Title } from '../../profile'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { FaClipboardList } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'

const ProfileWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 10%;
`

export default function Profile() {
  // const [session, loading] = useSession()
  const { data, error } = useSWR('/api/orders', fetcher, {
    refreshInterval: 5000,
  })
  const ordersData = data ? data.data : null
  if (ordersData) ordersData.reverse()

  if (error) {
    console.log(error)
  }

  // if (ordersData) {
  //   console.log(ordersData)
  // }

  return (
    <>
      {data ? (
        <>
          <Head>
            <title>Pedidos de entrega</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="shortcut icon" href="/favicon.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
              rel="stylesheet"
            />
          </Head>

          <HeaderTitle style={{ textAlign: 'center', margin: '1.2rem auto 0' }}>
            Delivery Camarada | Admin
          </HeaderTitle>

          <ProfileWrap style={{ marginTop: '0', paddingTop: '1rem' }}>
            <Tabs id="my-tabs">
              <TabList id="tabs-list">
                <Tab>
                  <p>Pedidos recebidos</p> <FaClipboardList className="icon" />
                </Tab>
                <Tab>
                  <p>Quadro de entregadores</p>{' '}
                  <IoIosSettings className="icon" />
                </Tab>
              </TabList>

              <TabPanel>
                {ordersData && <p>últimos pedidos recebidos:</p>}
                {ordersData && <OrderHistory ordersData={ordersData} />}
              </TabPanel>
              <TabPanel>
                <Title>Estamos construindo essa funcionalidade!</Title>
                <p style={{ marginTop: '1rem' }}>
                  Em breve você poderá visualizar entregadores, informações da
                  cooperativa, delegar entregas e muito mais.
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
