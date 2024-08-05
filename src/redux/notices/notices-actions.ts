import axios from 'axios';
import { Notice, Category, Sex, Species, Location } from './notices-types';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const fetchNotices = async (
  page: number,
  perPage: number
): Promise<{
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}> => {
  const response = await axios.get(`${API_URL}/notices`, {
    params: { page, perPage },
  });

  return {
    page: response.data.page,
    perPage: response.data.perPage,
    totalPages: response.data.totalPages,
    results: response.data.results,
  };
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_URL}/notices/categories`);
  return response.data;
};

export const fetchSexes = async (): Promise<Sex[]> => {
  const response = await axios.get(`${API_URL}/notices/sex`);
  return response.data;
};

export const fetchSpecies = async (): Promise<Species[]> => {
  const response = await axios.get(`${API_URL}/notices/species`);
  return response.data;
};

export const fetchNoticeById = async (noticeId: string): Promise<Notice> => {
  const response = await axios.get(`${API_URL}/notices/${noticeId}`);
  return response.data;
};

export const addFavoriteNotice = async (noticeId: string): Promise<Notice> => {
  const response = await axios.post(`${API_URL}/notices/favorites/add/${noticeId}`);
  return response.data;
};

export const removeFavoriteNotice = async (noticeId: string): Promise<Notice> => {
  const response = await axios.delete(`${API_URL}/notices/favorites/remove/${noticeId}`);
  return response.data;
};

export const fetchCities = async (): Promise<Location[]> => {
  const response = await axios.get(`${API_URL}/cities`);
  return response.data;
};
