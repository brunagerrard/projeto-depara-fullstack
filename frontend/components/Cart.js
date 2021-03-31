import CartItem from "./CartItem";
import styled from "styled-components";

const CartWrapper = styled.aside`
  width: 60vw;
  height: min-content;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1.3rem 2rem;
`;

export default function Cart({ cartItems }) {
  return (
    <CartWrapper>
      my Cart
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item}>
          {item.option}
        </CartItem>
      ))}
    </CartWrapper>
  );
}
