import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/Theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
);
