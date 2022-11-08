import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  
}
input {
  outline: none;
}
button {
  outline: none;
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
