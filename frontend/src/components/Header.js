import styled from "styled-components";

const RedTop = styled.header`
  width: 100%;
  height: 35vh;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  width: 80%;
  font: ${({ theme }) => theme.fonts.titles};
  color: rgba(455, 455, 455, 0.98);
`;

function Header(props) {
  return (
    <RedTop>
      <HeaderTitle>{props.title}</HeaderTitle>
    </RedTop>
  );
}

export default Header;
