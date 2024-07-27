import { useEffect, useMemo, useState } from 'react';

interface Params {
  page: string | number;
  search?: string;
  category?: string;
  type?: string;
}

export const useGetManga = (func: Function, params: Params) => {
  const mangaParams = useMemo(
    () => ({
      page: params.page,
      search: params.search,
      category: params.category,
      type: params.type,
    }),
    [params],
  );
  const { data, error, refetch } = func(mangaParams);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      console.log('start refetch');
      await refetch();
      console.log('end refetch');
      setIsLoading(false);
      console.log('params', params);
    };
    fetch();
  }, [mangaParams, data]);

  return { data, error, isLoading };
};
