import Image from "next/image";
import styled from "styled-components";

const LandingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 100px);
`;

const LandingContent = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  width: calc(100% - 114px);
  height: calc(100% - 20px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  #logo {
    width: 200px;
    margin: 0 auto;
  }
  .deliveryImg {
    width: 25vw;
  }

  @media (max-width: 800px) {
    .deliveryImg {
      display: none;
    }
  }
`;

export default function Landing() {
  return (
    <LandingBox>
      <LandingContent>
        <div className="deliveryImg">
          <Image
            src="/images/entrega-esq.png"
            alt="Ilustração de mulher recebendo entrega na porta"
            width={388}
            height={383}
          />
        </div>
        <div id="logo">
          <Image
            src="/images/logodepara.svg"
            alt="Logotipo da aplicação de_para, com a ilustração de uma bicicleta formada por símbolos comunistas. O pneu dianteiro é similar à engrenagem de uma máquina, o traseiro é uma foice e o guidão o martelo."
            id="logo"
            width={200}
            height={97}
          />
        </div>

        <div className="deliveryImg">
          <Image
            src="/images/entrega-dir.png"
            alt="Ilustração de entregador deixando o pedido"
            className="deliveryImg"
            width="388"
            height="383"
          />
        </div>
      </LandingContent>
    </LandingBox>
  );
}
