import styled from "styled-components";

const Button = styled.button`
  margin-left: 100%;
`;

export default function CartButton({ isDisabled }) {
  return (
    <>
      <Button disabled={isDisabled}>Confirmar pedido</Button>
    </>
  );
}
