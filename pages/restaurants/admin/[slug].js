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

const ProfileWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 10%;
`

export default function Profile() {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  // const [session, loading] = useSession()
  const { data, error } = useSWR(`/api/restaurants/${slug}`, fetcher)
  const restData = data ? data.data : null

  if (error) {
    console.log(error)
  }

  if (restData) {
    console.log(restData)
  }

  return (
    <>
      <Head>
        <title>test</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='shortcut icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      {/* <Session /> */}
      <Header title='Seu perfil' />
      <ProfileWrapper>
        {restData && <p>últimos pedidos:</p>}
        {restData && <OrderHistory userData={restData} />}
      </ProfileWrapper>
    </>
  )
}
