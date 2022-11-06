import React from 'react';
import styled from 'styled-components';
import GraphHeader from '../graphHeader/GraphHeader';

import Chart from '../chart/Chart';

const Wrapper = styled.section`
  height: 100%;
`;

const Graph = () => {
  return (
    <Wrapper>
      <GraphHeader />
      <Chart />
    </Wrapper>
  );
};

export default Graph;
