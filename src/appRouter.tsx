import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main.tsx';
import BaseLayout from './layouts/BaseLayout.tsx';
import SearchPage from './pages/SearchPage/SearchPage.tsx';
import { mangaListLoader } from './api/LoaderGetMangaList.ts';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <div>Error :(</div>,
    children: [
      {
        path: '/search/:page',
        element: <SearchPage />,
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
