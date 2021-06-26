/** @format */

import Head from 'next/head'
// import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import styled from 'styled-components'
// import Session from '../../../components/Session'
import Header from '../../../components/Header'
import fetcher from '../../../utils/fetcher'
import OrderHistory from '../../../components/OrderHistory'

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
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='shortcut icon' href='/favicon.png' />
            <link
              href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
              rel='stylesheet'
            />
          </Head>
          <ProfileWrapper>
            {ordersData && <p>últimos pedidos recebidos:</p>}
            {ordersData && <OrderHistory ordersData={ordersData} />}
          </ProfileWrapper>
        </>
      ) : (
        ''
      )}
    </>
  )
}
