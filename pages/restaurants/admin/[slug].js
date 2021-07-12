/** @format */

import { useRouter } from 'next/router'
import Head from 'next/head'
// import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import styled from 'styled-components'
// import Session from '../../../components/Session'
import Header from '../../../components/Header'
import fetcher from '../../../utils/fetcher'
import OrderHistory from '../../../components/OrderHistory'
import { ProfileWrap, Title } from '../../profile'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

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
          <Header title={data.data.name} />

          <ProfileWrap>
            <Tabs id="my-tabs">
              <TabList id="tabs-list">
                <Tab><p>Pedidos recebidos</p></Tab>
                <Tab><p>Dados do restaurante</p></Tab>
              </TabList>

              <TabPanel>
                {restData && <Title>últimos pedidos recebidos:</Title>}
                {restData && <OrderHistory restData={restData} />}
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
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
