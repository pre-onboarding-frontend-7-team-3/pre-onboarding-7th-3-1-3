import styled from "styled-components";
import { centerize } from "styles/GlobalStyle";

const Wrapper = styled.section`
  ${centerize}
  flex-direction:column;
  height: 100vh;
  background-color: #d0e8fd;
`;

function Layout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
