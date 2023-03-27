import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import MainComponents from "./documentation/main/main";
import GlobalStyle from "./styles/globalStyle";
import { HashRouter } from "react-router-dom";
import usePeristedState from "./utils/usePersistedState";

export default function App(props) {
    const theme: any = light;
    const { children } = props;

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <GlobalStyle />
                <MainComponents />
                {children}
            </HashRouter>
        </ThemeProvider>
    );
}
