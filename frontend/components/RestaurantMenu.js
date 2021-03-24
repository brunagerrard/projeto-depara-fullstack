import styled from "styled-components";

export const List = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 1rem;
  padding: 2rem 10%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
`;

const Option = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
`;

export const RestaurantMenu = ({ item }) => {
  return (
    <Option>
      {item.option}
      {item.price}
    </Option>
  );
};
