import styled from "styled-components"
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <p
        style={{
          display: "inline-block",
          width: "10px",
          color: `${({ theme }) => theme.colors.primaryRed}`,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => removeFromCart(item.id)}
          id="trash-icon"
        />
      </p>
    </Item>
  )
}
