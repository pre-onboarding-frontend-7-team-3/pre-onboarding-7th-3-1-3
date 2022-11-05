import styled from 'styled-components';

const Layout = styled.section`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.3rem;
  }
`;

const S = {
  Layout,
  Title,
};

export default S;
