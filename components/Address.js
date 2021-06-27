/** @format */
import { useSession } from 'next-auth/client'
import ViaCep from 'react-via-cep'
import styled from 'styled-components'

const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #feedback {
    padding: 1rem 0.8rem;
    margin-bottom: 0.8rem;
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const StreetType = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.2rem;
  font: ${({ theme }) => theme.fonts.links};

  @media (max-width: 700px) {
  }

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

export const TextInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.meredithGrey};
  width: 100%;
  font: ${({ theme }) => theme.fonts.links};
  padding: 0.8rem 0.3rem 0.4rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.ellisGrey};
  }
`

export default function Address({
  cep,
  setCep,
  tipoLogradouro,
  setTipoLogradouro,
  nomeLogradouro,
  setNomeLogradouro,
  bairro,
  setBairro,
  tipoResidencia,
  setTipoResidencia,
  complemento,
  setComplemento,
  numApto,
  setNumApto,
  numSala,
  setNumSala,
  edificio,
  setEdificio,
}) {
  const [session] = useSession()
  return (
    <AddressForm>
      <ViaCep cep={cep} lazy>
        {({ data, loading, error, fetch }) => {
          if (loading) {
            return <p>loading...</p>
          }
          if (error) {
            console.log(error)
          }
          if (data) {
            console.log(data)
            return (
              <>
                <p>
                  CEP: {data.cep} <br />
                  LOGRADOURO: {data.logradouro} <br />
                  CIDADE: {data.localidade} <br />
                  UF: {data.uf} <br />
                </p>
                <TextInput
                  type='text'
                  name='street'
                  placeholder='nome e número do local: Exemplo, 123'
                  id='street'
                  value={data.logradouro}
                  required
                />
              </>
            )
          }
          return (
            <>
              <input
                onChange={e => setCep(e.target.value)}
                value={cep}
                placeholder='CEP'
                type='text'
              />
              <button onClick={fetch}>Pesquisar</button>
            </>
          )
        }}
      </ViaCep>
      <StreetType>
        <input
          type='radio'
          id='casa'
          name='building'
          value='Casa'
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor='casa'>Casa</label>
        <input
          type='radio'
          id='apartamento'
          name='building'
          value='Apartamento'
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor='apartamento'>Apartamento</label>
        <input
          type='radio'
          id='comercial'
          name='building'
          value='Sala Comercial'
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor='comercial'>Prédio comercial</label>
      </StreetType>
      {tipoResidencia === 'Apartamento' && (
        <TextInput
          type='text'
          name='apto'
          placeholder='número do apartamento'
          id='apto'
          onInput={e => setNumApto(e.target.value)}
          required
        />
      )}
      {tipoResidencia === 'Sala Comercial' && (
        <>
          <TextInput
            type='text'
            name='predio'
            placeholder='nome do edifício'
            id='predio'
            onInput={e => setEdificio(e.target.value)}
            required
          />
          <TextInput
            type='text'
            name='sala'
            placeholder='número da sala'
            id='sala'
            onInput={e => setNumSala(e.target.value)}
            required
          />
        </>
      )}

      <TextInput
        type='text'
        name='neighborhood'
        placeholder='bairro'
        id='neighborhood'
        onInput={e => setBairro(e.target.value)}
        required
      />
      <TextInput
        type='text'
        name='additional'
        placeholder='complementos'
        id='additional'
        onInput={e => setComplemento(e.target.value)}
        required
      />
      {complemento && (
        <p id='feedback'>
          {session.user.name}, você receberá esse pedido em{' '}
          {tipoResidencia === 'Apartamento' ? 'seu' : 'sua'} {tipoResidencia}{' '}
          {tipoResidencia === 'Apartamento' && numApto}{' '}
          {tipoResidencia === 'Sala Comercial' &&
            `${numSala} no edifício ${edificio} `}
          {tipoLogradouro === 'Largo' ? 'no' : 'na'} {tipoLogradouro}{' '}
          {nomeLogradouro}, {bairro}.
        </p>
      )}
    </AddressForm>
  )
}
