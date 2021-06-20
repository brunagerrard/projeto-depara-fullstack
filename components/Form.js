/** @format */

import { useState } from 'react'
import styled from 'styled-components'
import { Button } from './CartButton'
import { TextInput } from './Address'
import Loading from './Loading'

const FormWrapper = styled.div`
  max-width: 550px;
  background-color: #ffffff;
  padding: 2rem 1.5rem;
  margin: 2.4rem auto 2.4rem 0;
  border-radius: 10px;
  font: ${({ theme }) => theme.fonts.paragraph};
  transition: box-shadow 0.3s;
  box-shadow: 1px 2px 5px ${({ theme }) => theme.colors.meredithGrey};

  :hover {
    box-shadow: 3px 4px 10px ${({ theme }) => theme.colors.meredithGrey};
  }
`

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  #hours {
    margin-top: 1rem;

    label {
      margin-right: 0.6rem;

      :nth-of-type(2) {
        margin-left: 1.8rem;
      }
    }
  }

  label:not(:first-of-type) {
    margin-top: 2.2rem;
  }

  input {
    margin-top: 0.4rem;
    transition: border-bottom 0.3s;

    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.richYellow};
    }
  }

  small {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
  }

  button {
    margin: 2.6rem 0;
  }
`

export default function Form() {
  const [isFormSent, setIsFormSent] = useState()

  const sendFormData = async e => {
    e.preventDefault()

    const res = await fetch('api/contact', {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        fee: e.target.fee.value,
        location: e.target.location.value,
        hoursFrom: e.target.availability1.value,
        hoursTil: e.target.availability2.value,
        story: e.target.story.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()

    e.target.reset()

    if (result) setIsFormSent(true)
  }
  return (
    <FormWrapper>
      <MyForm onSubmit={sendFormData}>
        <label htmlFor='name'>Qual o seu nome completo?</label>
        <TextInput
          type='text'
          id='name'
          name='name'
          placeholder='Seu nome'
          required
          autoFocus
        />
        <label htmlFor='email'>
          Qual o seu melhor e-mail para contato?
          <br />
          <small>Não divulgamos seus dados nem enviamos spam.</small>
        </label>
        <TextInput
          type='text'
          id='email'
          name='email'
          placeholder='E-mail'
          required
        />
        <label htmlFor='fee'>
          Qual valor de taxa você quer praticar?
          <br />
          <small>
            A taxa será definida por acordo coletivo entre os entregadores da
            cooperativa.
          </small>
        </label>
        <TextInput
          type='number'
          min='1.00'
          step='0.01'
          id='fee'
          name='fee'
          placeholder='Taxa em R$ do km'
          required
        />
        <label htmlFor='name'>
          A quais localidades de São Paulo você pode atender?
        </label>
        <TextInput
          type='text'
          id='location'
          name='location'
          placeholder='Bairros separados por vírgula'
          required
        />
        <label>Horário de disponibilidade:</label>
        <div id='hours'>
          <label htmlFor='availability1'>De</label>
          <input
            type='time'
            id='availability1'
            name='availability1'
            required
            defaultValue='08:30'
          />
          <label htmlFor='availability2'>Até</label>
          <input
            type='time'
            id='availability2'
            name='availability2'
            required
            defaultValue='18:30'
          />
        </div>
        <label htmlFor='story'>Quer enviar algum comentário?</label>
        <TextInput
          id='story'
          name='story'
          placeholder='Comentários adicionais'
        />
        <Button type='submit' onClick={() => setIsFormSent('sending')}>
          Enviar
        </Button>
        {isFormSent === 'sending' ? (
          <Loading />
        ) : (
          isFormSent && 'Dados enviados! Agora é só aguardar nosso contato.'
        )}
      </MyForm>
    </FormWrapper>
  )
}
