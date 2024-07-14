// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, Navigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Main from './pages/Main/Main.tsx';
import BaseLayout from './layouts/BaseLayout.tsx';
import { MangaPage } from './pages/news/ui/index.ts';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <div>Error :(</div>,
    children: [
      {
        path: '/',
        element: <Navigate to={'/1/all'} replace={true} />,
      },
      {
        path: '/manga/:id',
        element: <MangaPage />,
      },
      {
        path: '/:page',
        element: <Navigate to={'/1/all'} replace={true} />,
      },
      {
        path: '/:page/:category',
        element: <Main />,
      },
    ],
  },
]);
export default appRouter;
