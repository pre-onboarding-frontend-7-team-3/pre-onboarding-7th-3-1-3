import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem 1.7rem;
  height: 100%;
`;

const S = {
  Wrapper,
  Title,
  Box,
};

export default S;
