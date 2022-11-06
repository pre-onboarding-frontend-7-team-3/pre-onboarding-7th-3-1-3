import { useAdTrendValue } from 'hooks/useTrend';
import React from 'react';

const Graph = () => {
  const trendData = useAdTrendValue();
  return <div>Graph</div>;
};

export default Graph;
