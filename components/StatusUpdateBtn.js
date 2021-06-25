import styled from 'styled-components'

const Button = styled.button`
  background: none;
  border: 2px solid ${({theme}) => theme.colors.ellisGrey};
`

export default function StatusUpdateBtn({content, action}) {
    return (
        <button>{content}</button>
    )
}