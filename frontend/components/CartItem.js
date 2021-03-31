import styled from "styled-components";

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.richYellow};
  padding: 0.2rem 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

export default function CartItem({ item }) {
  return (
    <Item>
      <p>{item.option}</p>
      <small>{item.price},00</small>
    </Item>
  );
}
