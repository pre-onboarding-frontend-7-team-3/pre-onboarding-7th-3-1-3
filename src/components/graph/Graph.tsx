import React from 'react';
import styled from 'styled-components';
import GraphHeader from '../../graphHeader/GraphHeader';
import { useChartData } from '../../hooks/useChart';

const Wrapper = styled.section`
  height: 100%;
`;

const Graph = () => {
  const value = useChartData();
  console.log(value);
  return (
    <Wrapper>
      <GraphHeader />
    </Wrapper>
  );
};

export default Graph;
