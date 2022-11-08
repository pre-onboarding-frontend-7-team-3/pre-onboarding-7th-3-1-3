// import React, { ReactNode } from "react";
import styled from "styled-components";

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = ({ children }) => {
  return <Template>{children}</Template>;
};

export default Layout;

const Template = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20vh;
  background-color: #d0e8fd;
`;
