import { getMangaList } from './getMangaList.ts';
import { LoaderFunctionArgs } from 'react-router-dom';

interface Params {
  page: string;
  category: string;
}

export const mangaListLoader = async ({ params }: LoaderFunctionArgs) => {
  const { page, category } = params as unknown as Params;
  console.log('loader');
  return getMangaList({ page, category });
};
