/** @format */

import styled from 'styled-components'

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

  :hover {
    box-shadow: 3px 4px 10px ${({ theme }) => theme.colors.meredithGrey};
  }

  .sent {
    background-color: ${({ theme }) => theme.colors.ellisGrey};
  }
  .received {
    background-color: #EDAFB8;
  }
  .ontheway {
    background-color: #C2EABD;
  }
  .ended {
    background-color: #42D9C8;
  }
`

const StatusBadge = styled.small`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`

function OrderHistory({ userData }) {
  const { orders } = userData
  orders.reverse()
  console.log(userData)
  return (
    <OrdersBox>
      {orders.map(o => (
        <Order key={o._id}>
          <StatusBadge
            className={
              o.status === 'Pedido recebido pelo usuário'
                ? 'ended'
                : o.status === 'Pedido sendo preparado'
                ? 'received'
                : o.status === 'Pedido a caminho'
                ? 'ontheway'
                : 'sent'
            }
          >
            {o.status}
          </StatusBadge>
          <p>
            {o.restaurant}, {o._id}
          </p>
          <h3>Restaurante {o.restaurant}</h3>
          <p>{o.order[0].option}</p>
        </Order>
      ))}
    </OrdersBox>
  )
}

export default OrderHistory
