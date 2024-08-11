import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';
import { useGetMangaQuery } from '../../store/services/mangaApi.ts';
import BannerWithSkeleton from '../../components/Banner/Banner.tsx';
import CategoriesWithSkeleton from '../../components/Categories/categories.tsx';
import { useGetManga } from '../../helpers/hooks/useGetManga.ts';

const Main = () => {
  const { page, category } = useParams();
  const mangaListParams = useMemo(
    () => ({
      page: page || 1,
      category: category || 'all',
      type: 'newest',
    }),
    [page, category],
  );

  const { data, error, isLoading } = useGetManga(
    useGetMangaQuery,
    mangaListParams,
  );

  return (
    <main className={styles.main}>
      {error && <div>{error.message}</div>}
      <BannerWithSkeleton isLoading={isLoading} item={data?.mangaList || []} />
      <CategoriesWithSkeleton
        isLoading={isLoading}
        categories={data?.metaData.category}
        selectedCategory={category}
        currentPage={page}
      />
      <PaginationWithManga
        postQuery={''}
        mangas={data?.mangaList}
        totalPages={data?.metaData?.totalPages || 100}
        category={category}
        page={page}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Main;
