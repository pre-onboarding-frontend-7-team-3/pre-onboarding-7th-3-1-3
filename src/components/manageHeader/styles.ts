import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Select = styled.select`
  padding: 0.4rem 0.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  padding: 0.2rem 0.8rem;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.5rem;
`;

const S = {
  Header,
  Select,
  Button,
};

export default S;
