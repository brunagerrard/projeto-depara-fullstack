/** @format */

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import Loading from './Loading'
import OrderStatus from './OrderStatus'
import { RiCheckboxCircleFill } from 'react-icons/ri'

export const OrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

export const Order = styled.div`
  position: relative;
  width: 100%;
  background: url('/images/map.png') #ffffff no-repeat center;
  background-size: cover;
  padding: 1rem 1rem 5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px ${({ theme }) => theme.colors.meredithGrey};
  font: ${({ theme }) => theme.fonts.secLinks};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;

  #time {
    animation: flicker 1s infinite ease-in-out alternate;

    @keyframes flicker {
      100% {
        opacity: 0.2;
      }
    }
  }

  .flex {
    display: flex;
    line-height: 135%;
  }

  .price {
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.ellisGrey};
    padding: 0 0.4rem;
    border-radius: 5px;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .price.total {
    background-color: #42d9c8;
    color: #246e58;
    padding: 0.3rem 0.6rem;
    text-align: center;

    @media (min-width: 700px) {
      width: fit-content;
    }
  }

  .sent {
    background-color: rgba(203, 202, 207, 0.88);
    color: #393d3f;
  }
  .preparing {
    background-color: rgba(237, 175, 184, 0.9);
  }
  .waiting {
    background-color: rgba(249, 160, 63, 0.88);
  }
  .ontheway {
    background-color: rgba(255, 89, 100, 0.88);
  }
  .ended {
    background-color: #42d9c8;
    color: #246e58;
  }
`

export const Legend = styled.small`
  font-weight: 600;

  :not(:first-of-type) {
    margin-top: 0.6rem;
  }
`

export const OrderDetail = styled.p`
  font: ${({ theme }) => theme.fonts.links};
  color: #5d737e;
`

export const AddressDetail = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: lowercase;
`

const ChangeStatusBtn = styled.button`
  margin-top: 1.2rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  border: 1.4px solid ${({ theme }) => theme.colors.primaryRed};
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.secTitles};
  color: ${({ theme }) => theme.colors.primaryRed};
  background-color: #ffffff;
  transition: all 0.2s;
  > * {
    vertical-align: middle;
  }

  :hover {
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.primaryRed};
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
        updated: `${new Date().getHours()}:${
          (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()
        }`,
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
          <OrderStatus order={o} />

          {o.time && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <small>Pedido feito</small>
                <h2>{o.time}</h2>
              </div>
              {o.updatedAt && o.status !== 'Entrega realizada' && (
                <div>
                  <small>Atualizado</small>
                  <h2 id="time">{o.updatedAt}</h2>
                </div>
              )}
              {o.status === 'Entrega realizada' && (
                <div>
                  <small>Entregue</small>
                  <h2>{o.updatedAt}</h2>
                </div>
              )}
            </div>
          )}

          {router.pathname !== '/profile' && (
            <>
              <Legend>Usuário:</Legend>
              <OrderDetail>{o.user.email}</OrderDetail>
            </>
          )}

          <Legend>Endereço:</Legend>
          <AddressDetail>
            <OrderDetail>
              {o.address.rua}, {o.address.bairro}
              {o.address.complemento && `, ${o.address.complemento}`}
            </OrderDetail>
          </AddressDetail>

          <Legend>Pedido:</Legend>
          <div>
            {o.order.map(option => (
              <OrderDetail className="flex">
                <span className="price">{option.price},00</span> {option.option}
              </OrderDetail>
            ))}
          </div>

          <Legend>Total a pagar:</Legend>
          <OrderDetail className="price total">
            R$ {o.order.reduce((acc, item) => acc + item.price, 0)},00
          </OrderDetail>

          {router.pathname !== '/restaurants/admin/[slug]' && (
            <>
              <Legend>Loja:</Legend>
              <Link href={`../restaurants${o.restaurant.slug}`}>
                <OrderDetail
                  style={{
                    textDecoration: 'underline',
                    textUnderlinePosition: 'under',
                  }}
                >
                  {o.restaurant.name}
                </OrderDetail>
              </Link>
            </>
          )}

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
                )}{' '}
                <RiCheckboxCircleFill />
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
                )}{' '}
                <RiCheckboxCircleFill />
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
