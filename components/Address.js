/** @format */
import { useSession } from 'next-auth/client'
import styled from 'styled-components'

const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #feedback {
    padding: 1rem .8rem;
    margin-bottom: .8rem;
    background-color: ${({theme}) => theme.colors.background};
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

const TextInput = styled.input`
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
      <StreetType>
        <input
          type="radio"
          id="casa"
          name="building"
          value="Casa"
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor="casa">Casa</label>
        <input
          type="radio"
          id="apartamento"
          name="building"
          value="Apartamento"
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor="apartamento">Apartamento</label>
        <input
          type="radio"
          id="comercial"
          name="building"
          value="Sala Comercial"
          onClick={e => setTipoResidencia(e.target.value)}
        />
        <label htmlFor="comercial">Prédio comercial</label>
      </StreetType>
      {tipoResidencia === 'Apartamento' && (
        <TextInput
          type="text"
          name="apto"
          placeholder="número do apartamento"
          id="apto"
          onInput={e => setNumApto(e.target.value)}
          required
        />
      )}
      {tipoResidencia === 'Sala Comercial' && (
        <>
          <TextInput
            type="text"
            name="predio"
            placeholder="nome do edifício"
            id="predio"
            onInput={e => setEdificio(e.target.value)}
            required
          />
          <TextInput
            type="text"
            name="sala"
            placeholder="número da sala"
            id="sala"
            onInput={e => setNumSala(e.target.value)}
            required
          />
        </>
      )}
      <StreetType>
        <input
          type="radio"
          id="rua"
          name="street-type"
          value="Rua"
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label htmlFor="rua">Rua</label>
        <input
          type="radio"
          id="av"
          name="street-type"
          value="Avenida"
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label htmlFor="av">Avenida</label>
        <input
          type="radio"
          id="rodovia"
          name="street-type"
          value="Rodovia"
          onClick={e => setTipoLogradouro(e.target.value)}
        />
        <label htmlFor="rodovia">Rodovia</label>
      </StreetType>
      <TextInput
        type="text"
        name="street"
        placeholder="nome e número do local: Exemplo, 123"
        id="street"
        onInput={e => setNomeLogradouro(e.target.value)}
        required
      />
      <TextInput
        type="text"
        name="neighborhood"
        placeholder="bairro"
        id="neighborhood"
        onInput={e => setBairro(e.target.value)}
        required
      />
      <TextInput
        type="text"
        name="additional"
        placeholder="complementos"
        id="additional"
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
