import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkerRed};
  color: ${({ theme }) => theme.colors.richYellow};
  font: ${({ theme }) => theme.fonts.links};
  border: none;
  padding: 0.6rem 2rem;
  cursor: pointer;
  transition: background-color 0.1s;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryRed};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.background};
    color: #aaaaaa;
    cursor: default;
  }
`;

export default function CartButton({ isDisabled }) {
  return (
    <>
      <Button disabled={isDisabled}>Confirmar pedido</Button>
    </>
  );
}
