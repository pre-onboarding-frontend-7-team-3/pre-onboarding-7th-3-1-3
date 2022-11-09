import { ThemeProvider } from "styled-components";
import Theme from "styles/theme";

function App() {
  return <ThemeProvider theme={Theme}>app</ThemeProvider>;
}

export default App;
