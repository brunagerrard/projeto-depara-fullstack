import styled from "styled-components";
import Link from "next/link";
import Button from "./Button";

const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryRed};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 57px;

  a,
  button {
    font: ${({ theme }) => theme.fonts.links};
    text-transform: uppercase;
    letter-spacing: 2px;
    text-underline-offset: 3px;
    color: white;
    cursor: pointer;
  }

  #login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #hidden {
    padding: 0.2rem 0.5rem;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.rose};
    background-color: white;
    letter-spacing: 2px;
    position: absolute;
    top: -40px;
    color: ${({ theme }) => theme.colors.faintRose};
    transition: top 0.5s;
  }

  #hidden a {
    font: ${({ theme }) => theme.fonts.secLinks};
    color: ${({ theme }) => theme.colors.faintRose};
    text-transform: none;
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <Navbar>
      <Link href="/about">o projeto</Link>
      <div id="login">
        <Button />
        <button id="hidden">
          <Link href="">entregar</Link> | <Link href="/restaurants">pedir</Link>
        </button>
      </div>
    </Navbar>
  );
}
