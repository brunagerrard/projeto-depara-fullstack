import Image from "next/image";
import styled from "styled-components";

const LandingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;
`;

const LandingContent = styled.main`
  width: 55vw;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
`;

const WelcomeText = styled.h1`
  font: ${({ theme }) => theme.fonts.paragraph};
  font-size: 1.6rem;
  color: #ffffff;

  .underline {
    position: relative;
    display: inline;
    background: linear-gradient(to right, #ffc700, #ffc700);
    background-size: 0% 5px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 0.2s;
  }
`;

export default function Landing() {
  return (
    <LandingBox>
      <LandingContent>
        <Image
          src="/images/logodepara.svg"
          alt="Logotipo da aplicação de_para, com a ilustração de uma bicicleta formada por símbolos comunistas. O pneu dianteiro é similar à engrenagem de uma máquina, o traseiro é uma foice e o guidão o martelo."
          id="logo"
          width={200}
          height={97}
        />
        <WelcomeText>
          Tecnologia a serviço dos{" "}
          <span className="underline">trabalhadores</span>.
        </WelcomeText>
      </LandingContent>
    </LandingBox>
  );
}
