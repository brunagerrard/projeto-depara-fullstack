/** @format */

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.2rem;
`

export const Label = styled.small`
  width: 80px;
  text-transform: uppercase;
  font: ${({ theme }) => theme.fonts.secLinks};
  font-weight: 600;
  color: #2ec4b6;
  text-decoration: underline;
  text-underline-position: under;
`

const StatusBadge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.6rem 0.8rem;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
  color: #ffffff;
`

const StatusUpdate = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  margin-top: 0.6rem;

  @media (min-width: 800px) {
    display: inline-flex;
    position: absolute;
    top: 1rem;
    right: 0.8rem;
  }

  .done {
    background-color: #2ec4b6;
  }

  .active {
    background: linear-gradient(#2ec4b6 0 0) left/0% 100% no-repeat
      rgba(255, 255, 255, 0.8);
    animation: updating 1s ease-in-out infinite;

    @keyframes updating {
      100% {
        background-size: 100% 100%;
      }
    }
  }
`

const StatusBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`

export default function OrderStatus({ order }) {
  return (
    <Wrapper>
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
        {order.status !== 'Entrega realizada' && (
          <StatusUpdate>
            <StatusBar
              className={
                order.status === 'Pedido enviado'
                  ? 'active'
                  : order.status === 'Pedido sendo preparado' ||
                    order.status === 'Entregador chegou no restaurante' ||
                    order.status === 'Pedido a caminho'
                  ? 'done'
                  : ''
              }
            />
            <StatusBar
              className={
                order.status === 'Pedido sendo preparado'
                  ? 'active'
                  : order.status === 'Entregador chegou no restaurante' ||
                    order.status === 'Pedido a caminho'
                  ? 'done'
                  : ''
              }
            />
            <StatusBar
              className={
                order.status === 'Entregador chegou no restaurante'
                  ? 'active'
                  : order.status === 'Pedido a caminho'
                  ? 'done'
                  : ''
              }
            />
            <StatusBar
              className={order.status === 'Pedido a caminho' ? 'active' : ''}
            />
          </StatusUpdate>
        )}
      </StatusBadge>
    </Wrapper>
  )
}
