import styled from 'styled-components';

const Layout = styled.aside`
  flex: 1 1 18%;
  padding: 2rem 1.5rem;
  box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 0px 3px -1px rgba(0, 0, 0, 1);
`;

const Header = styled.header`
  background-color: #ffffff;
  height: 10%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey_50};
  margin-bottom: 2rem;
  div {
    width: 50%;
    margin-bottom: 1rem;
  }
  img {
    min-width: 70px;
    max-width: 100%;
  }
`;

const S = {
  Layout,
  Header,
};

export default S;
