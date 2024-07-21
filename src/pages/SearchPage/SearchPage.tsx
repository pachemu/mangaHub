import { useParams, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner.tsx';
import Search from '../../components/Search/Search.tsx';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';
import { useSearch } from '../../helpers/hooks/useSearch.ts';

const SearchPage = () => {
  let { page, category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({});
  const postQuery = searchParams.get('post');
  const { data, error, isLoading, setData } = useSearch(postQuery, {
    page,
    category,
  });

  return (
    <main className={styles.main}>
      <Search
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        page={page}
        setData={setData}
      />
      <Banner isLoading={isLoading} item={data.mangaList} />
      <PaginationWithManga
        totalPages={100}
        category={category}
        page={page}
        isLoading={isLoading}
        mangas={data.mangaList}
      />
    </main>
  );
};

export default SearchPage;
