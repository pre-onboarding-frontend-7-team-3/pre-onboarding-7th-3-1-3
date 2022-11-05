import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1 1 80%;
  background-color: ${(props) => props.theme.colors.bg};
`;

const S = {
  Layout,
  Main,
};

export default S;
