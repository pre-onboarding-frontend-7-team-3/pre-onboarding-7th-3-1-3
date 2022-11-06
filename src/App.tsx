import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import { DataActionEnum, DateActionEnum } from 'models/types';
import { useCallback, useEffect } from 'react';
import { useAds } from 'context/AdServiceContext';
import { useAdTrendDispatch, useDateDispatch } from 'hooks/useTrend';
import { DateContextProvider } from 'context/DateContext';
import { ChartProvider } from 'context/AdChartContext';
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

  useEffect(() => {
    if (baseDates.startDate) {
      dateDispatch({
        type: DateActionEnum.SET_START,
        date: baseDates.startDate,
      });
      dateDispatch({ type: DateActionEnum.SET_END, date: baseDates.startDate });
    }
  }, [baseDates]);
  const getAdList = useCallback(async () => {
    listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await adService?.getAdList();
      listDispatch({
        type: DataActionEnum.SET_DATA,
        data: response?.ads || [],
      });
    } catch (e) {
      console.error(e);
    } finally {
      listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [adService, listDispatch]);

  const getAdTrend = useCallback(async () => {
    trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await adService?.getTrend();
      trendDispatch({
        type: DataActionEnum.SET_DATA,
        data: response?.report.daily || [],
      });
    } catch (e) {
      console.error(e);
    } finally {
      trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [adService, trendDispatch]);

  useEffect(() => {
    getAdList();
  }, [getAdList]);

  useEffect(() => {
    getAdTrend();
  }, [getAdTrend]);
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
