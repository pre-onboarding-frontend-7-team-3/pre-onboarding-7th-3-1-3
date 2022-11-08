// import React, { ReactNode } from "react";
import styled from "styled-components";
// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = ({ children }) => {
  return (
    <Template>
      {children}
    </Template>
  );
};

export default Layout;

const Template = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  padding: 50px 20vh;
  background-color: #d0e8fd;
`;
