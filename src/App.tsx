import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import MainComponents from "./documentation/main/main";
import GlobalStyle from "./styles/globalStyle";
import { HashRouter } from "react-router-dom";

export default function App() {
  const theme: any = light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <MainComponents />
      </HashRouter>
    </ThemeProvider>
  );
}
