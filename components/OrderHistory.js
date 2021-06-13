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

  p {
    padding: 0.5rem 0.3rem 0.2rem;
    width: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
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

const StatusBadge = styled.small`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  width: fit-content;
  font-weight: bold;
`

function OrderHistory({ userData }) {
  const { orders } = userData
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
                ? 'preparing'
                : o.status === 'Pedido a caminho'
                ? 'ontheway'
                : 'sent'
            }
          >
            {o.status}
          </StatusBadge>
          <small>ID do pedido: {o._id}</small>
          <h3>{o.restaurant}</h3>
          {o.order.map(option => (
            <p>{option.option}</p>
          ))}
          <h3>
            Total: {o.order.reduce((acc, item) => acc + item.price, 0)},00
          </h3>
        </Order>
      ))}
    </OrdersBox>
  )
}

export default OrderHistory
