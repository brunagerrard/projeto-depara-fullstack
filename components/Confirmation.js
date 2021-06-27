/** @format */
import { useSession } from 'next-auth/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Address from './Address'
import { Button } from './CartButton'
import Loading from './Loading'

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`

const Modal = styled.div`
  background-color: #ffffff;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);

  @media (min-width: 600px) {
    width: 500px;
  }

  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
    padding-bottom: 6px;
    margin-bottom: 1.2rem;
  }
`

const OrderDetails = styled.form``

const DoOrDie = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  margin-top: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  button:first-of-type {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.darkerRed};
    color: ${({ theme }) => theme.colors.darkerRed};
    background-color: #ffffff;

    :hover {
      color: #ffffff;
      background-color: ${({ theme }) => theme.colors.darkerRed};
    }
  }

  button:last-of-type {
    background-color: ${({ theme }) => theme.colors.richYellow};
    color: ${({ theme }) => theme.colors.darkerRed};
    flex-grow: 2;
    transition: all .4s;

    :disabled {
      background-color: ${({ theme }) => theme.colors.ellisGrey};
      color: #ffffff;
    }
  }
`

export default function Confirmation({ cartItems, showModal, setShowModal }) {
  const [session] = useSession()
  const [isOrderSent, setIsOrderSent] = useState(false)
  const [cep, setCep] = useState('')
  const [num, setNum] = useState('')
  const router = useRouter()

  const sendFormData = async e => {
    e.preventDefault()

    const res = await fetch('../api/orders', {
      body: JSON.stringify({
        user: {
          name: session.user.name,
          email: session.user.email,
        },
        address: {
          rua: `${e.target.street.value}, ${e.target.number.value}`,
          bairro: `${e.target.neighborhood.value}`,
          complemento: `${e.target.additional.value}`
        },
        restaurant: document.title,
        order: cartItems,
        status: 'Pedido enviado',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    res && setIsOrderSent(true)

    e.target.reset()
    setTimeout(() => {
      router.push('/profile')
    }, 3000)
  }

  if (!showModal) {
    return null
  } else {
    return (
      <ModalWrapper>
        {isOrderSent ? (
          <Modal>
            <h4>Pedido enviado! Redirecionando...</h4>
            <Loading />
          </Modal>
        ) : (
          <Modal>
            <h4>Insira um endereço válido:</h4>
            <OrderDetails onSubmit={sendFormData}>
              <Address
                cep={cep}
                setCep={setCep}
                setNum={setNum}
              />
              <DoOrDie>
                <Button onClick={() => setShowModal(false)}>Cancelar</Button>
                <Button type='submit' disabled={!num}>Confirmar</Button>
              </DoOrDie>
            </OrderDetails>
          </Modal>
        )}
      </ModalWrapper>
    )
  }
}
