import { Outlet } from 'react-router-dom';

import { S } from './styles/GlobalStyle';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

const App = () => {
  return (
    <S.Layout>
      <Sidebar />
      <S.Main>
        <Header />
        <Outlet />
      </S.Main>
    </S.Layout>
  );
};

export default App;
