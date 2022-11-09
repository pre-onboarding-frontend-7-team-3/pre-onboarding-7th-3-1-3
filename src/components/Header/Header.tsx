import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

function Header({ title }: { title: string }) {
  return <HeaderStyle>{title}</HeaderStyle>;
}

export default Header;
