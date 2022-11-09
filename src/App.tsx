import Main from "pages/Main";
import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
