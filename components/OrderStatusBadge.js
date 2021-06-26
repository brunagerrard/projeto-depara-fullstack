/** @format */

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.2rem;
`

export const Label = styled.small`
  width: fit-content;
  text-transform: uppercase;
  font: ${({ theme }) => theme.fonts.secLinks};
  font-weight: 600;
  color: #2ec4b6;
  border-bottom: 1px solid #2ec4b6;
`

const StatusBadge = styled.small`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  width: fit-content;
  font-weight: bold;
  color: #ffffff;
`

export default function OrderStatusBadge({ order }) {
  return (
    <Wrapper>
      <Label style={{ display: 'inline' }}>Status:</Label>
      <StatusBadge
        className={
          order.status === 'Entrega realizada'
            ? 'ended'
            : order.status === 'Pedido sendo preparado'
            ? 'preparing'
            : order.status === 'Entregador chegou no restaurante'
            ? 'waiting'
            : order.status === 'Pedido a caminho'
            ? 'ontheway'
            : 'sent'
        }
      >
        {order.status}
      </StatusBadge>
    </Wrapper>
  )
}
