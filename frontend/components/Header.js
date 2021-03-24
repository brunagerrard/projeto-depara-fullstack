import { useRouter } from "next/router";
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const router = useRouter();
  return (
    <RedTop>
      <HeaderTitle>
        <p
          style={{
            display: "inline-block",
            width: "20px",
            marginRight: "20px",
            color: "rgba(455, 455, 455, 0.98)",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => router.back()} />
        </p>
        {props.title}
      </HeaderTitle>
    </RedTop>
  );
}

export default Header;
