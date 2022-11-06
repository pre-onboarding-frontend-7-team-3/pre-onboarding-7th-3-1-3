import { AdTrendProvider } from 'context/AdTrendContext';
import { CategoryContextProvider } from 'context/CategoryContext';
import { DateContextProvider } from 'context/DateContext';
import Home from 'pages/home/Home';
import Manage from 'pages/manage/Manage';
import NotFound from 'pages/Notfound/Notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { AdListProvider } from './context/AdListContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
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
    <AdTrendProvider>
      <AdListProvider>
        <DateContextProvider>
          <RouterProvider router={router} />
        </DateContextProvider>
      </AdListProvider>
    </AdTrendProvider>
  );
};

export default Router;
