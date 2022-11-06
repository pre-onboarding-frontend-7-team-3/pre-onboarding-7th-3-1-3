import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import { DataActionEnum } from 'models/types';
import { useCallback, useEffect } from 'react';
import { useAds } from 'context/AdServiceContext';
import { useAdTrendDispatch } from 'hooks/useTrend';
import { DateContextProvider } from 'context/DateContext';
import { ChartProvider } from 'context/AdChartContext';
import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { useAdListDispatch } from './hooks/useAdList';

const App = () => {
  const listDispatch = useAdListDispatch();
  const trendDispatch = useAdTrendDispatch();
  const value = useAds();

  const getAdList = useCallback(async () => {
    listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await value?.getAdList();
      listDispatch({
        type: DataActionEnum.SET_DATA,
        data: response?.ads || [],
      });
    } catch (e) {
      console.error(e);
    } finally {
      listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [value, listDispatch]);

  const getAdTrend = useCallback(async () => {
    trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await value?.getTrend();
      trendDispatch({
        type: DataActionEnum.SET_DATA,
        data: response?.report.daily || [],
      });
    } catch (e) {
      console.error(e);
    } finally {
      trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [value, trendDispatch]);

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
          <DateContextProvider>
            <ChartProvider>
              <Outlet />
            </ChartProvider>
          </DateContextProvider>
        </CategoryContextProvider>
      </S.Main>
    </S.Layout>
  );
};

export default App;
