import axios from 'axios';
import { NewsApiResponse } from './news-type';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const getNews = async (): Promise<NewsApiResponse> => {
  const response = await axios.get<NewsApiResponse>(`${API_URL}/news`);
  return response.data;
};
