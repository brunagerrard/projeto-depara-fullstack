/** @format */

import { useState } from 'react'
import styled from 'styled-components'
import { Button } from './CartButton'
import { TextInput } from './Address'
import Address from './Address'
import Loading from './Loading'

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  font: ${({ theme }) => theme.fonts.paragraph};

  label :not(:first-of-type) {
    margin-top: 1.6rem;
  }

  input {
    transition: border-bottom 0.3s;

    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.richYellow};
    }
  }

  button[type='submit'] {
    margin-top: 2rem;
  }

  #feedback {
    text-align: center;
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.colors.darkerRed};
    font-weight: 400;
  }
`

export default function ProfileDetails({ userData }) {
  const [cep, setCep] = useState('')
  const [num, setNum] = useState('')
  const [isFormSent, setIsFormSent] = useState()

  const sendFormData = async e => {
    e.preventDefault()

    const res = await fetch(`api/user/${e.target.email.value}`, {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        address: {
          rua: `${e.target.street.value}, ${e.target.number.value}`,
          bairro: `${e.target.neighborhood.value}`,
          complemento: `${e.target.additional.value}`,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()

    if (result) setIsFormSent(true)
  }
  return (
    <MyForm onSubmit={sendFormData}>
      <label htmlFor="name">Nome</label>
      <TextInput
        type="text"
        id="name"
        name="name"
        placeholder={userData.name}
      />
      <label htmlFor="email">E-mail</label>
      <TextInput
        type="text"
        id="email"
        name="email"
        value={userData.email}
        readOnly
      />
      <label>Endereço</label>
      <Address cep={cep} setCep={setCep} setNum={setNum} />
      <Button type="submit" onClick={() => setIsFormSent('sending')}>
        Enviar
      </Button>
      {isFormSent === 'sending' ? (
        <Loading />
      ) : (
        isFormSent && <p id='feedback'>Dados atualizados!</p>
      )}
    </MyForm>
  )
}
