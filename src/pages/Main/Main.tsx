import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { getMangaList } from '../../api/getMangaList.ts';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner.tsx';
import Categories from '../../components/Categories/categories.tsx';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';

const Main = () => {
  let { page, category } = useParams();
  const mangaListParams = useMemo(
    () => ({
      page: page || 1,
      category: category || 'all',
      type: 'newest',
    }),
    [page, category],
  );
  const { data, error, isLoading, categories } = useFetch<
    {
      mangaList: [];
      metaData: {
        totalPages: number | 100;
      };
    },
    typeof mangaListParams
  >(getMangaList, mangaListParams);

  return (
    <main className={styles.main}>
      {error && <div>{error.name}</div>}
      <Banner isLoading={isLoading} item={data.mangaList} />
      <Categories
        isLoading={isLoading}
        categories={categories}
        selectedCategory={category}
        currentPage={page}
      />
      {data.metaData && (
        <PaginationWithManga
          mangas={data.mangaList}
          totalPages={data.metaData.totalPages}
          category={category}
          page={page}
          isLoading={isLoading}
        />
      )}
    </main>
  );
};

export default Main;
