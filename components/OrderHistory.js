/** @format */

import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Loading from './Loading'
import OrderStatusBadge, { Label, Wrapper } from './OrderStatusBadge'

const OrdersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`

const Order = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.colors.meredithGrey};
  font: ${({ theme }) => theme.fonts.secLinks};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;

  @media (min-width: 1000px) {
    width: 35vw;
  }

  h3 {
    color: #5d737e;
  }

  :hover {
    box-shadow: -3px -4px 10px ${({ theme }) => theme.colors.meredithGrey};
  }

  .sent {
    background-color: ${({ theme }) => theme.colors.ellisGrey};
    color: #393d3f;
  }
  .preparing {
    background-color: #edafb8;
  }
  .waiting {
    background-color: #f9a03f;
  }
  .ontheway {
    background-color: #ff5964;
  }
  .ended {
    background-color: #42d9c8;
    color: #246e58;
  }
`

const OrderDetail = styled.p`
  font: ${({ theme }) => theme.fonts.links};
`

const AddressDetail = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: lowercase;
`

const ChangeStatusBtn = styled.button`
  margin-top: 1.2rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.secTitles};
  color: #ff5964;
  background-color: #ffffff;
  box-shadow: inset 0 0 15px ${({ theme }) => theme.colors.meredithGrey};
  transition: all 0.2s;

  :hover {
    color: #ffffff;
    background-color: #ff5964;
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.primaryRed};
  }
`

export default function OrderHistory({ ordersData, restData, userData }) {
  if (restData) {
    const { orders } = restData
    ordersData = orders
  }

  if (userData) {
    const { orders } = userData
    ordersData = orders
  }

  const [isUpdateSent, setIsUpdateSent] = useState()

  const sendStatusUpdate = async (o, status) => {
    setIsUpdateSent('sending')
    const order_id = await o._id

    const res = await fetch(`../../api/orders/${order_id}`, {
      body: JSON.stringify({
        order_status: status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    if (result) setIsUpdateSent(true)
  }

  const router = useRouter()

  return (
    <OrdersBox>
      {ordersData.map(o => (
        <Order key={o._id}>
          <OrderStatusBadge order={o} />

          <Wrapper>
            <Label>Usuário:</Label>
            <h3>{o.user.email}</h3>
          </Wrapper>

          <Wrapper>
            <Label>Endereço:</Label>
            <AddressDetail>
              <h3>
                {o.address.rua}, {o.address.bairro}
                {o.address.complemento && `, ${o.address.complemento}`}
              </h3>
            </AddressDetail>
          </Wrapper>

          <Wrapper>
            <Label>Valor:</Label>
            <h3>R$ {o.order.reduce((acc, item) => acc + item.price, 0)},00</h3>
          </Wrapper>

          <Wrapper>
            <Label>Pedido:</Label>
            <h3>
              {o.order.map(option => (
                <OrderDetail>{option.option}</OrderDetail>
              ))}
            </h3>
          </Wrapper>

          {router.pathname === '/couriers/admin' ? (
            //if order has just been sent to the restaurant and you're on couriers page, it will show no button
            o.status === 'Pedido enviado' ||
            o.status === 'Entrega realizada' ? (
              ''
            ) : (
              <ChangeStatusBtn
                onClick={e => {
                  sendStatusUpdate(o, e.target.innerText)
                }}
              >
                {isUpdateSent === 'sending' ? (
                  <Loading />
                ) : o.status === 'Pedido sendo preparado' ? (
                  'Entregador chegou no restaurante'
                ) : o.status === 'Entregador chegou no restaurante' ? (
                  'Pedido a caminho'
                ) : o.status === 'Pedido a caminho' ? (
                  'Entrega realizada'
                ) : (
                  ''
                )}
              </ChangeStatusBtn>
            )
          ) : router.pathname === '/restaurants/admin/[slug]' ? (
            //if courier just got to the restaurant and you're on restaurants admin page, it will show no button
            o.status !== 'Pedido enviado' ? (
              ''
            ) : (
              <ChangeStatusBtn
                onClick={e => {
                  sendStatusUpdate(o, e.target.innerText)
                }}
              >
                {isUpdateSent === 'sending' ? (
                  <Loading />
                ) : o.status === 'Pedido enviado' ? (
                  'Pedido sendo preparado'
                ) : (
                  ''
                )}
              </ChangeStatusBtn>
            )
          ) : (
            ''
          )}

        </Order>
      ))}
    </OrdersBox>
  )
}
