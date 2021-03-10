import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background}
  }
`;

const theme = {
  colors: {
    primaryRed: "#cc2929",
    darkerRed: "#aa2121",
    richYellow: "#ffc700",
    background: "#f0f0f7",
    maroon: "#4d2626",
    rose: "#ffc2c2",
    faintRose: "#c4a8b9",
  },
  fonts: {
    links: "600 .9rem Inter, sans-serif",
    secLinks: "400 .8rem Inter, sans-serif",
    paragraph: "300 1.1rem Montserrat, sans-serif",
    titles: "600 2rem Archivo, sans-serif",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
