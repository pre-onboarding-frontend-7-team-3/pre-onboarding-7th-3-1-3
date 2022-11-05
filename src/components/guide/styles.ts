import styled from 'styled-components';

const Layout = styled.section`
  height: 30%;
  p {
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.grey_300};
    font-size: 0.6rem;
    line-height: 2;
  }
  p:last-child {
    text-decoration: underline;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
  padding: 1.2rem 1em;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  button {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    border-radius: 100%;
  }
`;

const TextBox = styled.div`
  h3 {
    font-size: 0.8rem;
    font-weight: bold;
  }
  p {
    color: ${(props) => props.theme.colors.grey_300};
    font-size: 0.6rem;
    margin: 0;
  }
  p:last-child {
    text-decoration: none;
  }
`;

const S = { Layout, Box, TextBox };

export default S;
