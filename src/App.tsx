import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import {
  AdType,
  DataActionEnum,
  DateActionEnum,
  TrendType,
} from 'models/types';
import { useCallback, useEffect } from 'react';
import { useAds } from 'context/AdServiceContext';
import { useAdTrendDispatch, useDateDispatch } from 'hooks/useTrend';
import { ChartProvider } from 'context/AdChartContext';
import { useQuery } from 'react-query';
import { GetTrendResponse } from 'models/interface';
import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { useAdListDispatch } from './hooks/useAdList';
import { useBaseDate } from './hooks/useTrend';

const App = () => {
  const listDispatch = useAdListDispatch();
  const trendDispatch = useAdTrendDispatch();
  const adService = useAds();
  const baseDates = useBaseDate();
  const dateDispatch = useDateDispatch();
  const { isLoading, data: trendData } = useQuery(
    ['trend'],
    () => adService?.getTrend(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

  const { data: listData } = useQuery(
    ['adList'],
    () => adService?.getAdList(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

  useEffect(() => {
    if (baseDates.startDate) {
      dateDispatch({
        type: DateActionEnum.SET_START,
        date: baseDates.startDate,
      });
      dateDispatch({ type: DateActionEnum.SET_END, date: baseDates.startDate });
    }
  }, [baseDates]);

  useEffect(() => {
    trendDispatch({
      type: DataActionEnum.SET_DATA,
      data: trendData?.report.daily || [],
    });
    trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading });
  }, [trendData, isLoading]);

  useEffect(() => {
    listDispatch({
      type: DataActionEnum.SET_DATA,
      data: listData?.ads || [],
    });
  }, [listData]);

  return (
    <S.Layout>
      <Sidebar />
      <S.Main>
        <Header />
        <CategoryContextProvider>
          <ChartProvider>
            <Outlet />
          </ChartProvider>
        </CategoryContextProvider>
      </S.Main>
    </S.Layout>
  );
};

export default App;
