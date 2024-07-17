import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import BaseLayout from './layouts/BaseLayout.tsx';
import { MangaPage } from './pages/news/ui/index.ts';
import { mangaListLoader } from './api/LoaderGetMangaList.ts';

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
        loader: mangaListLoader,
      },
    ],
  },
]);
export default appRouter;
