import { useParams, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner.tsx';
import Search from '../../components/Search/Search.tsx';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';
import { useGetMangaBySearchQuery } from '../../store/services/mangaApi.ts';
import { useGetManga } from '../../helpers/hooks/useGetManga.ts';
import { useMemo } from 'react';

const SearchPage = () => {
  let { page = '1', category } = useParams(); // Установка значения по умолчанию для page
  const [searchParams, setSearchParams] = useSearchParams({});
  const postQuery = searchParams.get('post') || 'One Piece';
  const mangaListParams = useMemo(
    () => ({
      page: page || '1',
      search: postQuery || '',
    }),
    [page, postQuery],
  );

  const { data, error, isLoading } = useGetManga(
    useGetMangaBySearchQuery,
    mangaListParams,
  );

  return (
    <main className={styles.main}>
      <Search setSearchParams={setSearchParams} postQuery={postQuery} />
      {error ? <div>{String(error)}</div> : null}
      <Banner isLoading={isLoading} item={data?.mangaList} />
      <PaginationWithManga
        postQuery={postQuery}
        totalPages={data?.totalPages || 100}
        category={category}
        page={page}
        isLoading={isLoading}
        mangas={data?.mangaList}
      />
    </main>
  );
};

export default SearchPage;
