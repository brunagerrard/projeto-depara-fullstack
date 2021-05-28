import { useState } from "react";
import CartItem from "./CartItem";
import CartButton from "./CartButton";
import styled from "styled-components";

const CartWrapper = styled.aside`
  width: 60vw;
  height: min-content;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  position: sticky;
  bottom: -21vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 1.3rem 2rem;
  border: 1px solid #ffffff;
  box-shadow: 0 0 5px #dddddd;
  font: ${({ theme }) => theme.fonts.secLinks};
  transition: bottom 0.4s;

  :hover {
    bottom: 0;
  }

  h4,
  h5 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

const CartList = styled.div`
  max-height: 20vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dddddd40;
    border-radius: 7px;
  }

  :hover {
    ::-webkit-scrollbar-thumb {
      background-color: #dddddd;
    }
  }
`;

export default function Cart({ cartItems, setCartItems }) {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleRemoveFromCart(id) {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          return [...acc];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  }

  function calculateTotal(items) {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  return (
    <CartWrapper>
      <h4>Carrinho</h4>
      {cartItems.length === 0 ? (
        <p>
          Você ainda não adicionou nada. Clique sobre o item que deseja incluir!
        </p>
      ) : null}
      <CartList>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={handleRemoveFromCart}
          >
            {item.option}
          </CartItem>
        ))}
      </CartList>
      <h5>Total: ${calculateTotal(cartItems).toFixed(2)}</h5>
      <CartButton isDisabled={cartItems.length === 0} cartItems={cartItems} />
    </CartWrapper>
  );
}
