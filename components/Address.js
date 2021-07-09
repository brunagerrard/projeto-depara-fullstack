/** @format */
import { useSession } from 'next-auth/client'
import ViaCep from 'react-via-cep'
import styled from 'styled-components'
import Loading from './Loading'
import { Wrapper } from './OrderStatus'
import { BsCheck } from 'react-icons/bs'

const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #cep {
    width: 100px;
  }

  #number {
    flex-shrink: 1.6;
  }

  #neighborhood {
    flex-shrink: 1.3;
  }
`

export const GoButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primaryRed};
`

export const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.meredithGrey};
  font: ${({ theme }) => theme.fonts.links};
  padding: 0.2rem 0.3rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.ellisGrey};
  }
`

export default function Address({ cep, setCep, num, setNum }) {
  const [session] = useSession()
  return (
    <AddressForm>
      <ViaCep cep={cep} lazy>
        {({ data, loading, error, fetch }) => {
          if (loading) {
            return <Loading />
          }
          if (error) {
            console.log(error)
          }
          return (
            <>
              <Wrapper>
                <TextInput
                  onChange={e => setCep(e.target.value)}
                  value={cep}
                  placeholder="CEP"
                  type="text"
                  id="cep"
                />
                <GoButton onClick={fetch}>
                  {' '}
                  <BsCheck />
                </GoButton>
              </Wrapper>
              {data && (
                <>
                  {console.log(data)}
                  <Wrapper id="wrapper">
                    <TextInput
                      type="text"
                      name="street"
                      id="street"
                      value={data.logradouro}
                      required
                      readOnly
                    />
                    <TextInput
                      type="text"
                      name="neighborhood"
                      id="neighborhood"
                      value={data.bairro}
                      required
                      readOnly
                    />
                    <TextInput
                      type="number"
                      name="number"
                      id="number"
                      placeholder="nº"
                      required
                      onInput={e => setNum(e.target.value)}
                    />
                  </Wrapper>
                  <TextInput
                    type="text"
                    name="additional"
                    placeholder="complementos"
                    id="additional"
                  />
                </>
              )}
            </>
          )
        }}
      </ViaCep>
    </AddressForm>
  )
}
