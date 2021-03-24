import styled from "styled-components";

export const List = styled.main`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 700px));
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 1rem;
  padding: 2rem 10%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(1fr, 300px));
  }
`;

const Option = styled.div`
  background-color: #ffffff;
  box-shadow: 0 5px 4px -3px rgba(0, 0, 0, 0.1),
    inset 0 -10px 0 0 ${({ theme }) => theme.colors.richYellow};
  padding: 1rem 2rem;
  cursor: pointer;
  border: 1px solid #ffffff;
  transition: border 0.2s, margin 0.3s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.richYellow};
    margin-left: 0.4rem;

    h3 {
      color: ${({ theme }) => theme.colors.primaryRed};
    }
  }

  h3 {
    font: ${({ theme }) => theme.fonts.secTitles};
    margin-bottom: 1.2rem;
  }

  p {
    font: ${({ theme }) => theme.fonts.smallParagraph};

    &:last-of-type {
      margin: 1rem 0;
      font-weight: 400;
    }
  }
`;

export const RestaurantMenu = ({ item }) => {
  return (
    <Option>
      <h3>{item.option}</h3>
      <p>{item.description}</p>
      <p>R$ {item.price},00</p>
    </Option>
  );
};
