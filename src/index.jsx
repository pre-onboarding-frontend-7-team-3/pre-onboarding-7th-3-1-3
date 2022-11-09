import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
