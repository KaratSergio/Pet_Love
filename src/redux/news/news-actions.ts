import axios from 'axios';
import { News } from './news-type';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const getNews = async (): Promise<News[]> => {
  const response = await axios.get(`${API_URL}/news`);
  return response.data;
};
