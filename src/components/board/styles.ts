import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  flex: 1;
`;

const S = {
  Wrapper,
  Title,
  Box,
};

export default S;
