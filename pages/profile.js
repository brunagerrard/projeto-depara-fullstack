/** @format */

import Head from 'next/head'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import useSWR from 'swr'
import styled from 'styled-components'
import Session from '../components/Session'
import Nav from '../components/Nav'
import fetcher from '../utils/fetcher'
import OrderStatus from '../components/OrderStatus'
import OrderHistory from '../components/OrderHistory'
import {
  OrdersBox,
  Order,
  Legend,
  OrderDetail,
  AddressDetail,
} from '../components/OrderHistory'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { FaRoute } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { HiBadgeCheck } from 'react-icons/hi'
import ProfileDetails from '../components/ProfileDetails'

const ProfileWrap = styled.div`
  margin-top: 2rem;
  padding: 3rem 10% 4rem;

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
      margin: 0.5rem 0;
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

const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.secTitles};
  font-size: 0.8rem;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ellisGrey};
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

  let currentOrder
  if (userData) {
    currentOrder = userData.orders[0]
  }

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
              <p>Pedido atual</p>
              <FaRoute className="icon" />
            </Tab>
            <Tab>
              <p>Pedidos entregues</p>
              <HiBadgeCheck className="icon" />
            </Tab>
            <Tab>
              <p>Minha conta</p>
              <RiUserSettingsFill className="icon" />
            </Tab>
          </TabList>

          <TabPanel>
            <OrdersWrap>
              <Title>pedido atual</Title>
              {currentOrder && (
                <OrdersBox>
                  <Order>
                    <OrderStatus order={currentOrder} />

                    {currentOrder.time && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <small>Pedido feito</small>
                          <h2>{currentOrder.time}</h2>
                        </div>
                        {currentOrder.updatedAt &&
                          currentOrder.status !== 'Entrega realizada' && (
                            <div>
                              <small>Atualizado</small>
                              <h2 id="time">{currentOrder.updatedAt}</h2>
                            </div>
                          )}
                        {currentOrder.status === 'Entrega realizada' && (
                          <div>
                            <small>Entregue</small>
                            <h2>{currentOrder.updatedAt}</h2>
                          </div>
                        )}
                      </div>
                    )}

                    <Legend>Endereço:</Legend>
                    <AddressDetail>
                      <OrderDetail>
                        {currentOrder.address.rua},{' '}
                        {currentOrder.address.bairro}
                        {currentOrder.address.complemento &&
                          `, ${currentOrder.address.complemento}`}
                      </OrderDetail>
                    </AddressDetail>

                    <Legend>Pedido:</Legend>
                    <div>
                      {currentOrder.order.map(option => (
                        <OrderDetail className="flex">
                          <span className="price">{option.price},00</span>{' '}
                          {option.option}
                        </OrderDetail>
                      ))}
                    </div>

                    <Legend>Loja:</Legend>
                    <Link
                      href={`../restaurants${currentOrder.restaurant.slug}`}
                    >
                      <OrderDetail
                        style={{
                          textDecoration: 'underline',
                          textUnderlinePosition: 'under',
                        }}
                      >
                        {currentOrder.restaurant.name}
                      </OrderDetail>
                    </Link>

                    <Legend>Total a pagar:</Legend>
                    <OrderDetail className="price total">
                      R${' '}
                      {currentOrder.order.reduce(
                        (acc, item) => acc + item.price,
                        0
                      )}
                      ,00
                    </OrderDetail>
                  </Order>
                </OrdersBox>
              )}
            </OrdersWrap>
          </TabPanel>

          <TabPanel>
            <OrdersWrap>
              <Title>últimos pedidos</Title>

              {userData && <OrderHistory userData={userData} />}
            </OrdersWrap>
          </TabPanel>

          <TabPanel>
            <Title>Editar meu perfil</Title>
            {userData && <ProfileDetails userData={userData} />}
          </TabPanel>
        </Tabs>
      </ProfileWrap>
    </>
  )
}
