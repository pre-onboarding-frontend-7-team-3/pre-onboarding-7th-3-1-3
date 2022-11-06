import styled from 'styled-components';

const Wrapper = styled.article<{ modifyMode: boolean }>`
  border: 1px solid
    ${(props) =>
      props.modifyMode ? props.theme.colors.blue : props.theme.colors.grey_100};
  border-radius: 10px;
  width: 300px;
  height: 400px;
  padding: 0.5rem 1rem;
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: ${(props) => props.theme.colors.grey_800};
    border-bottom: ${(props) => props.theme.border};
    padding: 1.3rem 0;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em;
  color: ${(props) => props.theme.colors.grey_800};
  border: 2px solid ${(props) => props.theme.colors.grey_100};
  border-radius: 0.5rem;
  margin-top: 0.5em;
  font-weight: bold;
`;

const S = {
  Wrapper,
  Button,
};

export default S;
