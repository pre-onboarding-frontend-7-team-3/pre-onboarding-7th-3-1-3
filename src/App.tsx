import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";
import Home from "pages/Home";
import GlobalStyle from "styles/GlobalStyle";
import Layout from "components/Layout";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
