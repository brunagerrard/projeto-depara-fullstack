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
  }
`

export default function Confirmation({ cartItems, showModal, setShowModal }) {
  const [session] = useSession()
  const [isOrderSent, setIsOrderSent] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [tipoLogradouro, setTipoLogradouro] = useState('')
  const [nomeLogradouro, setNomeLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [tipoResidencia, setTipoResidencia] = useState('')
  const [complemento, setComplemento] = useState('')
  const [numApto, setNumApto] = useState('')
  const [numSala, setNumSala] = useState('')
  const [edificio, setEdificio] = useState('')
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
          tipo: tipoResidencia,
          apartamento: numApto,
          sala: numSala,
          edificio,
          nome: `${tipoLogradouro} ${nomeLogradouro}`,
          bairro,
          complemento,
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

    const { _id } = await res.json()

    setOrderId(_id)
    setIsOrderSent(true)

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
                tipoLogradouro={tipoLogradouro}
                setTipoLogradouro={setTipoLogradouro}
                nomeLogradouro={nomeLogradouro}
                setNomeLogradouro={setNomeLogradouro}
                bairro={bairro}
                setBairro={setBairro}
                tipoResidencia={tipoResidencia}
                setTipoResidencia={setTipoResidencia}
                complemento={complemento}
                setComplemento={setComplemento}
                numApto={numApto}
                setNumApto={setNumApto}
                numSala={numSala}
                setNumSala={setNumSala}
                edificio={edificio}
                setEdificio={setEdificio}
              />
              <DoOrDie>
                <Button onClick={() => setShowModal(false)}>Cancelar</Button>
                <Button type='submit'>Confirmar</Button>
              </DoOrDie>
            </OrderDetails>
          </Modal>
        )}
      </ModalWrapper>
    )
  }
}
