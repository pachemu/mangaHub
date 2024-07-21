import { useEffect, useMemo, useState } from 'react';
import { useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { getMangaList, searchManga } from '../../api/getMangaList.ts';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner.tsx';
import Categories from '../../components/Categories/categories.tsx';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';
import Search from '../../components/Search/Search.tsx';
import PaginationWithManga from '../../components/PaginationWithManga/PaginationWithManga.tsx';
import { IMangaList } from '../../interfaces/interfaces.ts';

const Main = () => {
  let { page, category } = useParams();
  const dataS = useLoaderData() as IMangaList;
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
        totalPages: number;
      };
    },
    typeof mangaListParams
  >(getMangaList, mangaListParams);
  const postQuery = searchParams.get('post');
  const [da, setDa] = useState<IMangaList>({
    mangaList: [],
    metaData: { totalPages: 0 },
  });

  useEffect(() => {
    let isMounted = true;
    const fetchDa = async () => {
      console.log(postQuery, page);
      if (postQuery) {
        const data = await searchManga(postQuery, page);
        if (isMounted) {
          setDa(data);
        }
      } else {
        const data = await getMangaList({ page: page, category: category });
        if (isMounted) {
          setDa(data);
        }
      }
    };
    fetchDa();
    return () => {
      isMounted = false;
    };
  }, [page, category, postQuery]);

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
      <Search
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        page={page}
        setData={setDa}
      />
      <Banner isLoading={isLoading} item={da.mangaList} />
      {dataS.metaData.category && (
        <Categories
          isLoading={isLoading}
          categories={dataS.metaData.category}
          selectedCategory={category}
          currentPage={page}
        />
      )}
      <PaginationWithManga
        totalPages={
          da.metaData ? da.metaData.totalPages : dataS.metaData.totalPages
        }
        category={category}
        page={page}
        isLoading={isLoading}
        mangas={da.mangaList ? da.mangaList : dataS.mangaList}
      />
    </main>
  );
};

export default Main;
