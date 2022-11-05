import styled from 'styled-components';

const Layout = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h3`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.grey_300};
  font-size: 0.6rem;
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 1rem;
`;

const Item = styled.li<{ path: boolean }>`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.path ? props.theme.colors.bg : props.theme.colors.white};
  color: ${(props) =>
    props.path ? props.theme.colors.blue : props.theme.colors.grey_800};
`;

const Button = styled.button<{ path: boolean }>`
  font-size: 1.3rem;
  margin-right: 0.5em;
  color: ${(props) =>
    props.path ? props.theme.colors.blue : props.theme.colors.grey_800};
`;

const S = {
  Button,
  Item,
  Title,
  List,
  Layout,
};

export default S;
