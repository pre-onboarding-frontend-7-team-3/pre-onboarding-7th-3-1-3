import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default App;
