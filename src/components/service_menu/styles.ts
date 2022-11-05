import styled from 'styled-components';

const Layout = styled.section`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.grey_300};
  font-size: 0.6rem;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.8rem 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.grey_800};
  border: 1px solid ${(props) => props.theme.colors.grey_100};
  outline: none;
  option {
    color: ${(props) => props.theme.colors.grey_800};
  }
`;

const S = {
  Layout,
  Label,
  Select,
};

export default S;
