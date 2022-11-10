import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Template>{children}</Template>;
};

export default Layout;

const Template = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 50px 20vh;
`;
