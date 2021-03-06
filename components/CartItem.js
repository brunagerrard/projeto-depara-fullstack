/** @format */

import styled from 'styled-components'
import { BsTrash } from 'react-icons/bs'

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
  padding: 0.2rem 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  p:first-of-type {
    flex-grow: 2;
  }

  p:nth-of-type(2) {
    flex-grow: 0.5;
  }

  #trash-icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.richYellow};
    :hover {
      color: ${({ theme }) => theme.colors.primaryRed};
    }
  }
`

export default function CartItem({ item, removeFromCart }) {
  return (
    <Item>
      <p>{item.option}</p>
      <p>{item.price},00</p>
      <BsTrash onClick={() => removeFromCart(item.id)} id='trash-icon' />
    </Item>
  )
}
