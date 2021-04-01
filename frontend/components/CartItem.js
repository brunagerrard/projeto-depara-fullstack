import styled from "styled-components";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  small {
    flex-grow: 0.5;
  }

  button {
  }
`;

export default function CartItem({ item, removeFromCart }) {
  return (
    <Item>
      <p>{item.option}</p>
      <small>{item.price},00</small>
      <p
        style={{
          display: "inline-block",
          width: "10px",
          color: `${({ theme }) => theme.colors.primaryRed}`,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => removeFromCart(item.id)}
        />
      </p>
    </Item>
  );
}
