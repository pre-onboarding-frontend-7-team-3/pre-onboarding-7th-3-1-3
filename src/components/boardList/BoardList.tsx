import React from 'react';
import styled from 'styled-components';
import { useAdTrendValue } from '../../hooks/useTrend';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 2);
  padding: 1rem;
`;

const BoardList = () => {
  const trendData = useAdTrendValue();

  return (
    <Wrapper>
      <div />
    </Wrapper>
  );
};

export default BoardList;
