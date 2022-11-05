import { Outlet } from 'react-router-dom';
import { CategoryContextProvider } from 'context/CategoryContext';
import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

const App = () => {
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
