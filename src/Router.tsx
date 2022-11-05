import Home from 'pages/home/Home';
import Manage from 'pages/manage/Manage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { AdsProvider } from './context/AdsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/manage',
        element: <Manage />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <AdsProvider>
      <RouterProvider router={router} />;
    </AdsProvider>
  );
};

export default Router;
