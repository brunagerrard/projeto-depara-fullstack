/** @format */

import styled from 'styled-components'

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.meredithGrey};
  border-top: 5px solid ${({ theme }) => theme.colors.richYellow};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function Loading() {
  return <Spinner />
}
