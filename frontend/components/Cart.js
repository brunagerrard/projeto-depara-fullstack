import CartItem from "./CartItem";
import styled from "styled-components";

const CartWrapper = styled.aside`
  width: 60vw;
  height: min-content;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  position: sticky;
  bottom: 0;
  display: block;
  margin: 0 auto;
  padding: 1.3rem 2rem;
  border: 1px solid #ffffff;
  box-shadow: 0 0 5px #dddddd;
  font: ${({ theme }) => theme.fonts.secLinks};

  h4 {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

export default function Cart({ cartItems }) {
  return (
    <CartWrapper>
      <h4>Carrinho</h4>
      {cartItems.length === 0 ? (
        <p>
          Você ainda não adicionou nada. Clique sobre o item que deseja incluir!
        </p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item}>
          {item.option}
        </CartItem>
      ))}
    </CartWrapper>
  );
}