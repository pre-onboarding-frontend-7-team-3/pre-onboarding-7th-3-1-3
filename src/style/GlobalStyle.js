import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #d0e8fd;
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
