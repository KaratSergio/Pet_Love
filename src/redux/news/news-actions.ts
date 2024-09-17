import axios from 'axios';
import { NewsApiResponse } from './news-type';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const getNews = async (page: number, limit: number, keyword?: string): Promise<NewsApiResponse> => {
  const response = await axios.get<NewsApiResponse>(`${API_URL}/news`, {
    params: { page, limit, keyword },
  });
  return response.data;
};
