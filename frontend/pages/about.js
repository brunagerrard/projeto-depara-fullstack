import styled from "styled-components";
import Head from "next/head";

const AboutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

const AboutContent = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  width: calc(100% - 114px);
  height: calc(100vh - 209px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    font: ${({ theme }) => theme.fonts.paragraph};
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre de_para</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;1,600&family=Montserrat:wght@200;300;400&family=Poppins:wght@300;600&family=Ubuntu:ital,wght@1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutBox>
        <AboutContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at erat tincidunt, suscipit risus id, interdum magna. Proin nec
            ligula sed elit finibus tempor eu in nulla. Maecenas quis dui odio.
            In efficitur fermentum mauris et luctus. Etiam metus erat, vehicula
            nec vulputate nec, semper et orci. Phasellus vitae sapien auctor,
            rutrum leo ut, convallis dolor. Ut eget orci et tortor vestibulum
            facilisis vel quis dolor. Cras sit amet orci accumsan, eleifend
            neque at, vehicula metus. Nulla gravida diam quis eros placerat
            suscipit.
          </p>
        </AboutContent>
      </AboutBox>
    </>
  );
}
