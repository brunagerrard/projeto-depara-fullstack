import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  transition: margin 0.2s;

  &:hover {
    margin-left: 0.4rem;

    h3 {
      color: ${({ theme }) => theme.colors.primaryRed};
    }

    #add {
      opacity: 1;
    }
  }

  h3 {
    font: ${({ theme }) => theme.fonts.secTitles};
    margin-bottom: 1.2rem;
  }

  p {
    font: ${({ theme }) => theme.fonts.smallParagraph};
  }
  
  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    & p {
      font-weight: 400;
    }
  }

  #add {
    opacity: 0;
    transition: opacity .1s;
  }
`;

export const RestaurantMenu = ({ item }) => {
  return (
    <Option>
      <h3>{item.option}</h3>
      <p>{item.description}</p>
      <div>
        <p>R$ {item.price},00</p>
        <p 
        id="add"
        style={{
          display: "inline-block",
          width: "0.9rem",
          color: "#cc2929",
          cursor: "pointer",
        }}>
          <FontAwesomeIcon icon={faPlus} />
        </p>
      </div>
      
    </Option>
  );
};
