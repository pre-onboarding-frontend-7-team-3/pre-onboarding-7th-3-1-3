import styled from 'styled-components';

const Layout = styled.section`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.grey};
  font-size: 0.6rem;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.8rem 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.lightGrey};
  outline: none;
  option {
    color: ${(props) => props.theme.colors.grey};
  }
`;

const S = {
  Layout,
  Label,
  Select,
};

export default S;
