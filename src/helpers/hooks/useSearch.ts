import { useEffect, useMemo, useState } from 'react';
import { IMangaList } from '../../interfaces/interfaces.ts';
import { getMangaList, searchManga } from '../../api/getMangaList.ts';
import { Params, useParams } from 'react-router-dom';
import { reverseToEnglish } from '../reverseToEnglish.ts';

export const useSearch = (postQuery: string, params: Params) => {
  let { page } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<
    | object
    | IMangaList
    | {
        mangaList?: [];
        metaData: {
          totalPages: number | 100;
        };
      }
  >({});
  const memoizedParams = useMemo(() => params, [params]);
  const englishQuery = reverseToEnglish(postQuery);
  useEffect(() => {
    let isMounted = true;
    const fetchDa = async () => {
      if (englishQuery) {
        const data = await searchManga(englishQuery, page);
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      } else {
        const data = await getMangaList(memoizedParams);
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      }
    };
    fetchDa();
    return () => {
      isMounted = false;
    };
  }, [page, postQuery]);
  return { data, error, isLoading, setData, englishQuery };
};
