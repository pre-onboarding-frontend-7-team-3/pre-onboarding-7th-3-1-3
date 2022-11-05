import { AdTrendProvider } from 'context/AdTrendContext';
import Home from 'pages/home/Home';
import Manage from 'pages/manage/Manage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { AdListProvider } from './context/AdListContext';

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
    <AdListProvider>
      <AdTrendProvider>
        <RouterProvider router={router} />
      </AdTrendProvider>
    </AdListProvider>
  );
};

export default Router;
