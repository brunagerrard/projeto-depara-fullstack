/** @format */

import { useState } from 'react'
import styled from 'styled-components'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../components/Loading'
import StatusUpdateBtn from '../components/StatusUpdateBtn'

const OrdersBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`

const Order = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.colors.meredithGrey};
  font: ${({ theme }) => theme.fonts.secLinks};
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  small :nth-of-type(2) {
    color: #b6b1bd;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primaryRed};
    margin-top: 0.6rem;

    :nth-of-type(2) {
      color: ${({ theme }) => theme.colors.ellisGrey};
    }
  }

  :hover {
    box-shadow: 3px 4px 10px ${({ theme }) => theme.colors.meredithGrey};
  }

  .sent {
    background-color: ${({ theme }) => theme.colors.ellisGrey};
  }
  .preparing {
    background-color: #edafb8;
  }
  .ontheway {
    background-color: #c2eabd;
  }
  .ended {
    background-color: #42d9c8;
    color: #246e58;
  }
`

const OrderDetail = styled.p`
  padding: 0.5rem 0.3rem 0.2rem;
  width: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
`

const AddressDetail = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: lowercase;
  padding-bottom: 1rem;
`

const StatusBadge = styled.small`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  width: fit-content;
  font-weight: bold;
`

const ChangeStatus = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.richYellow};
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`

const SelectStatus = styled.select`
  border: none;
  outline: none;
  width: fit-content;
  margin-right: 1rem;
  font: ${({ theme }) => theme.fonts.smallParagraph};
  cursor: pointer;
  appearance: none;
`

function DeliveryOrderHistory({ ordersData }) {
  // const { orders } = ordersData

  const [isUpdateSent, setIsUpdateSent] = useState()
  const [statusUpdate, setStatusUpdate] = useState('')
  console.log(statusUpdate)

  const sendStatusUpdate = async o => {
    setIsUpdateSent('sending')
    const order_id = await o._id

    const res = await fetch(`../../api/place-order/${order_id}`, {
      body: JSON.stringify({
        order_status: statusUpdate,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    if (result) setIsUpdateSent(true)
  }
  return (
    <OrdersBox>
      {ordersData.map(o => (
        <Order key={o._id}>
          {/* <form> */}
            <button
            onClick={(e) => {setStatusUpdate(e.target.innerText); sendStatusUpdate(o)}}
            >{
              o.status === 'Entregador chegou no restaurante'
                ? 'Pedido a caminho'
                : o.status === 'Pedido a caminho'
                ? 'Entrega realizada'
                : o.status === 'Entrega realizada'
                ? 'no action'
                : 'Entregador chegou no restaurante'
            }
          </button>
          <p
            style={{
              width: '20px',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => sendStatusUpdate(o)}
            />
          </p>
          {isUpdateSent === 'sending' ? <Loading /> : ''}
          {/* </form> */}
          
          <StatusBadge
            className={
              o.status === 'Pedido recebido pelo usuário'
                ? 'ended'
                : o.status === 'Pedido sendo preparado'
                ? 'preparing'
                : o.status === 'Pedido a caminho'
                ? 'ontheway'
                : 'sent'
            }
          >
            {o.status}
          </StatusBadge>
          <small id="id_text">ID do pedido: {o._id}</small>
          <h3>{o.user.email}</h3>
          <AddressDetail>
            {o.address.nome}, {o.address.bairro}
          </AddressDetail>
          {o.order.map(option => (
            <OrderDetail>{option.option}</OrderDetail>
          ))}
          <h3>
            Total: {o.order.reduce((acc, item) => acc + item.price, 0)},00
          </h3>
        </Order>
      ))}
    </OrdersBox>
  )
}

export default DeliveryOrderHistory
