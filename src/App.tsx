import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import { DataActionEnum } from 'models/types';
import { useCallback, useEffect } from 'react';
import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { useAdsDispatch } from './hooks/useAdList';
import AdsList from './json/ad-list-data-set.json';
import Trends from './json/trend-data-set.json';

const App = () => {
  const dispatch = useAdsDispatch();
  const getList = useCallback(async () => {
    dispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await fetch('./json/ad-list-data-set.json');
      const data = response.json();
      console.log(data);
      dispatch({ type: DataActionEnum.SET_DATA, data });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [dispatch]);
  useEffect(() => {
    getList();
  }, [getList]);
  return (
    <S.Layout>
      <Sidebar />
      <S.Main>
        <Header />
        <CategoryContextProvider>
          <Outlet />
        </CategoryContextProvider>
      </S.Main>
    </S.Layout>
  );
};

export default App;
