import React from 'react';
import styled from 'styled-components';
import calculateData from 'utils/calculateData';
import { useAdTrendValue, usePrevTrendValue } from '../../hooks/useTrend';
import BoardItem from '../boardItem/BoardItem';
import { formatTrend } from '../../utils/formatData';

const Wrapper = styled.ul`
  height: 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 1rem;
  gap: 10px;
`;

const BoardList = () => {
  const trendData = useAdTrendValue();
  const prevData = usePrevTrendValue();
  const { cost, click, convValue, imp, conv, roas } = calculateData(trendData);
  const {
    cost: prevCost,
    click: prevClick,
    convValue: prevConvValue,
    imp: prevImp,
    conv: prevConv,
    roas: prevRoas,
  } = calculateData(prevData);
  const diffRoas =
    prevData.length !== 0
      ? Math.abs(roas / trendData.length - prevRoas / prevData.length)
      : Math.abs(roas / trendData.length);
  const infoArray = [
    {
      name: 'ROAS',
      data: `${formatTrend(roas / trendData.length)} %`,
      diff: `${formatTrend(diffRoas)} %`,
      increased: diffRoas >= 0,
    },
    {
      name: '광고비',
      data: `${formatTrend(cost)} 원`,
      diff: `${formatTrend(Math.abs(cost - prevCost))} 원`,
      increased: cost - prevCost >= 0,
    },
    {
      name: '노출 수',
      data: `${formatTrend(imp)} 회`,
      diff: `${formatTrend(Math.abs(imp - prevImp))} 회`,
      increased: imp - prevImp >= 0,
    },
    {
      name: '클릭수',
      data: `${formatTrend(click)} 회`,
      diff: `${formatTrend(Math.abs(click - prevClick))} 회`,
      increased: click - prevClick >= 0,
    },
    {
      name: '전환 수',
      data: `${formatTrend(conv)} 회`,
      diff: `${formatTrend(Math.abs(conv - prevConv))} 회`,
      increased: conv - prevConv >= 0,
    },
    {
      name: '매출',
      data: `${formatTrend(convValue)} 원`,
      diff: `${formatTrend(Math.abs(convValue - prevConvValue))} 회`,
      increased: convValue - prevConvValue >= 0,
    },
  ];
  return (
    <Wrapper>
      {infoArray.map((item) => (
        <BoardItem
          key={item.name}
          name={item.name}
          data={item.data}
          diff={item.diff}
          increased={item.increased}
        />
      ))}
    </Wrapper>
  );
};

export default BoardList;
