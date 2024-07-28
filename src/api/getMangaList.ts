import axios from 'axios';
import { IMangaList } from '../interfaces/interfaces.ts';

interface Params {
  page: string | number;
  category: string;
}

export const getMangaList = async (params: Params): Promise<IMangaList> => {
  try {
    const response = await axios.get(`/api/mangaList`, {
      params: params,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching manga list:', error);
    throw error;
  }
};

export const searchManga = async (
  query: string,
  page?: string | '1' | number,
): Promise<IMangaList> => {
  try {
    const response = await axios.get(`/api/search/${query}`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching manga:', error);
    throw error;
  }
};
