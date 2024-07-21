import { useEffect, useState, useMemo } from 'react';
import { IMangaList } from '../../interfaces/interfaces';

interface FetchFunction<P, T> {
  (params: P): Promise<T>;
}

interface UseFetchResult<T> {
  data:
    | IMangaList
    | T
    | {
        mangaList?: [];
        metaData: {
          totalPages: 100 | number;
        };
      };
  data: T; 
  error: Error | null;
  isLoading: boolean;
  categories: Array<object> | null;
}

export const useFetch = <T, P>(
  func: FetchFunction<P, T>,
  params: P,
): UseFetchResult<T> => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<
    | object
    | IMangaList
    | T
    | {
        mangaList?: [];
        metaData: {
          totalPages: number | 100;
        };
      }
  >({});
  const [data, setData] = useState<T>(null); // Adjust initial state as per your API response
  const [categories, setCategories] = useState<Array<object> | null>(null);

  const memoizedParams: P = useMemo(() => params, [params]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result: T = await func(memoizedParams);
        if (isMounted) {
          setData(result);
          if (isIMangaList(result)) {
            setCategories(result.metaData.category);
          } else {
            setCategories([]);
          }
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [func, memoizedParams]);

  return { data, error, isLoading, categories };
};

const isIMangaList = (data: any): data is IMangaList => {
  return data && data.metaData && Array.isArray(data.metaData.category);
};
