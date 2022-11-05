import React from 'react';
import styled from 'styled-components';
import { useAdTrendState, useAdTrendValue } from '../../hooks/useTrend';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 2);
  padding: 1.5rem;
`;

const AdList = () => {
  const Trend = useAdTrendValue();
  return <Wrapper />;
};

export default AdList;
