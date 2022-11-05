import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import { DataActionEnum } from 'models/types';
import { useCallback, useEffect } from 'react';
import { useAds } from 'context/AdServiceContext';
import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { useAdsDispatch } from './hooks/useAdList';

const App = () => {
  const dispatch = useAdsDispatch();
  const value = useAds();

  const getList = useCallback(async () => {
    dispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });
    try {
      const response = await value?.getAdList();
      dispatch({
        type: DataActionEnum.SET_DATA,
        data: response?.ads || [],
      });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });
    }
  }, [value, dispatch]);
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
