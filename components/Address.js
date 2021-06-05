import { useState } from 'react'
import styled from 'styled-components'

const AddressForm = styled.div`
  #street-name {
    border: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.meredithGrey};
    width: 100%;
    font: ${({ theme }) => theme.fonts.links};
    padding: 0.8rem 0.3rem 0.4rem;
    margin: 1.1rem 0;

    ::placeholder {
      color: ${({ theme }) => theme.colors.ellisGrey};
    }
  }
`

const StreetType = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  font: ${({ theme }) => theme.fonts.links};

  label {
    flex-grow: 1;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.meredithGrey};
    border-radius: 8px;
    padding: 0.6rem;
    text-align: center;

    :hover {
      border-color: ${({ theme }) => theme.colors.richYellow};
    }
  }

  input[type='radio']:checked + label {
    border-color: ${({ theme }) => theme.colors.richYellow};
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`
export default function Address({
  tipoLogradouro,
  setTipoLogradouro,
  nomeLogradouro,
  setNomeLogradouro,
}) {
  return (
    <AddressForm>
      <StreetType>
        <input
          type='radio'
          id='rua'
          name='street-type'
          value='Rua'
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label for='rua'>Rua</label>
        <input
          type='radio'
          id='av'
          name='street-type'
          value='Avenida'
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label for='av'>Avenida</label>
        <input
          type='radio'
          id='travessa'
          name='street-type'
          value='Travessa'
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label for='travessa'>Travessa</label>
        <input
          type='radio'
          id='largo'
          name='street-type'
          value='Largo'
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label for='largo'>Largo</label>
        <input
          type='radio'
          id='rodovia'
          name='street-type'
          value='Rodovia'
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label for='rodovia'>Rodovia</label>
      </StreetType>
      <input
        name='street-name'
        placeholder='insira o nome e número do local: Exemplo, 123'
        id='street-name'
        onInput={e => setNomeLogradouro(e.target.value)}
        required
      />
      {tipoLogradouro && (
        <p>
          Você receberá esse pedido {tipoLogradouro === 'Largo' ? 'no' : 'na'}{' '}
          {tipoLogradouro}: {nomeLogradouro}
        </p>
      )}
    </AddressForm>
  )
}
