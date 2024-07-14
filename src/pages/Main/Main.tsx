import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { getMangaList } from '../../api/getMangaList.ts';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner.tsx';
import MangaList from '../../components/MangaList/MangaList.tsx';
import Pagination from '../../components/Pagination/pagination.tsx';
import Categories from '../../components/Categories/categories.tsx';
import Search from '../../components/Search/Search.tsx';
import { TOTAL_PAGES } from '../../constants/constants.ts';

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  let { page, category } = useParams();
  const type = searchParams.get('type') || 'topview';
  const mangaListParams = useMemo(
    () => ({
      page: page || 1,
      category: category || 'all',
      type: type || 'newest',
    }),
    [page, category, type],
  );
  const { data, error, isLoading, categories } = useFetch<
    {
      mangaList: [];
    },
    typeof mangaListParams
  >(getMangaList, mangaListParams);
  const postQuery = searchParams.get('post');

  return (
    <main className={styles.main}>
      {error && <div>{error.name}</div>}
      <Search
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        page={page}
      />
      <Banner isLoading={isLoading} item={data.mangaList} />
      {categories && (
        <Categories
          isLoading={isLoading}
          categories={categories}
          selectedCategory={category}
          currentPage={page}
        />
      )}
      <Pagination totalPages={TOTAL_PAGES} category={category} page={page} />
      <MangaList isLoading={isLoading} mangas={data.mangaList} />
      <Pagination category={category} totalPages={TOTAL_PAGES} page={page} />
    </main>
  );
};

export default Main;
