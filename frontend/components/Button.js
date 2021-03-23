import styled from "styled-components";

const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryRed};
  padding: 0.5rem 1.5rem;
  border: 1px solid white;
  border-radius: 30px;
  font: ${({ theme }) => theme.fonts.links};
  color: white;
  transition: 0.3s background-color, 0.3s color;

  :hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primaryRed};
  }
`;

export default function Button() {
  return (
    <Btn
      onClick={() => {
        const hiddenLogin = document.getElementById("hidden");
        hiddenLogin.style.top === "65px"
          ? (hiddenLogin.style.top = "-40px")
          : (hiddenLogin.style.top = "65px");
      }}
    >
      entre
    </Btn>
  );
}
