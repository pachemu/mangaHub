import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMangaList } from '../../interfaces/interfaces.ts';

interface Params {
  page: string | number;
  category?: string;
  search?: string;
}

export const mangaApi = createApi({
  reducerPath: 'mangaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mangahub-mx3e.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getManga: builder.query<IMangaList, Params>({
      query: (params) => ({
        url: '/mangaList',
        params: params,
      }),
    }),
    getMangaBySearch: builder.query<IMangaList, Params>({
      query: ({ page, search }) => ({
        url: `/search/${search}`,
        params: { page },
      }),
    }),
  }),
});

export const { useGetMangaQuery, useGetMangaBySearchQuery } = mangaApi;
