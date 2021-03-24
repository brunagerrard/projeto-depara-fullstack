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
    titles: "600 2rem Roboto Slab, sans-serif",
    secTitles: "600 1.1rem Inter, sans-serif",
    paragraph: "300 1.1rem Inter, sans-serif",
    smallParagraph: "300 .9rem Roboto Slab, sans-serif",
    links: "600 .9rem Inter, sans-serif",
    secLinks: "400 .8rem Inter, sans-serif",
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
