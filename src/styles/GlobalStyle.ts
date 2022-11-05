import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;

  }
  a {
  color: inherit;
  text-decoration: none;
  }
  li {
  list-style: none;
  }
  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1 1 80%;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
`;

export const S = {
  Layout,
  Main,
};
