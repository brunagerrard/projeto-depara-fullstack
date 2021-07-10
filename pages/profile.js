/** @format */

import Head from 'next/head'
import { useSession } from 'next-auth/client'
import useSWR from 'swr'
import styled from 'styled-components'
import Session from '../components/Session'
import Nav from '../components/Nav'
import fetcher from '../utils/fetcher'
import OrderHistory from '../components/OrderHistory'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { IoFastFoodOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import ProfileDetails from '../components/ProfileDetails'

const ProfileWrap = styled.div`
  margin-top: 2rem;
  padding: 3rem 5% 4rem;

  .react-tabs__tab-panel {
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
  }

  #tabs-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    border: none;

    .icon {
      font-size: 1.4rem;
    }

    .react-tabs__tab {
      width: 100%;
      border: none;
      border-radius: 10px 10px 0 0;
    }

    .react-tabs__tab--selected {
      color: ${({ theme }) => theme.colors.primaryRed};
      list-style: none;
      p {
        font-weight: bold;
      }
    }
  }
`

const OrdersWrap = styled.div``

export default function Profile() {
  const [session, loading] = useSession()
  const { data, error } = useSWR(
    !loading ? `/api/user/${session?.user.email}` : null,
    fetcher,
    { refreshInterval: 5000 }
  )
  const userData = data ? data.data : null

  if (error) {
    console.log(error)
  }

  return (
    <>
      <Head>
        <title>{session?.user.name} | de_para: delivery camarada</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600&family=Roboto+Slab:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Session />
      <Nav />
      <ProfileWrap>
        <Tabs id="my-tabs">
          <TabList id="tabs-list">
            <Tab>
              <p>Pedidos</p>
              <IoFastFoodOutline className='icon' />
            </Tab>
            <Tab>
              <p>Perfil</p>
              <CgProfile className='icon' />
            </Tab>
          </TabList>

          <TabPanel>
            <OrdersWrap>
              {session && data && (
                <p>oi, {data.data.name}! aqui estão seus últimos pedidos:</p>
              )}
              {userData && <OrderHistory userData={userData} />}
            </OrdersWrap>
          </TabPanel>

          <TabPanel>
            {userData && <ProfileDetails userData={userData} />}
          </TabPanel>
        </Tabs>
      </ProfileWrap>
    </>
  )
}
