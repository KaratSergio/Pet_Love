import { apiClient } from '../apiClient';
import { Notice, Category, Sex, Species, Location } from './notices-types';

export const fetchNotices = async (
  page: number,
  perPage: number,
  keyword?: string,
  category?: string,
  sex?: string,
  species?: string,
  location?: string,
  filter?: string
) => {
  const query = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
    keyword: keyword || '',
    category: category || '',
    sex: sex || '',
    species: species || '',
    location: location || '',
    filter: filter || '',
  }).toString();

  const response = await apiClient.get(`/notices?${query}`);
  if (!response) {
    throw new Error('Failed to fetch notices');
  }
  return response.data;
};

// export const fetchNotices = async (
//   page: number,
//   perPage: number
// ): Promise<{
//   page: number;
//   perPage: number;
//   totalPages: number;
//   results: Notice[];
// }> => {
//   const response = await apiClient.get('/notices', {
//     params: { page, perPage },
//   });

//   return response.data;
// };

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await apiClient.get('/notices/categories');
  return response.data;
};

export const fetchSexes = async (): Promise<Sex[]> => {
  const response = await apiClient.get('/notices/sex');
  return response.data;
};

export const fetchSpecies = async (): Promise<Species[]> => {
  const response = await apiClient.get('/notices/species');
  return response.data;
};

export const fetchNoticeById = async (noticeId: string): Promise<Notice> => {
  const response = await apiClient.get(`/notices/${noticeId}`);
  return response.data;
};

export const addFavoriteNotice = async (noticeId: string): Promise<string[]> => {
  const response = await apiClient.post(`/notices/favorites/add/${noticeId}`);
  return response.data;
};

export const removeFavoriteNotice = async (noticeId: string): Promise<string[]> => {
  const response = await apiClient.delete(`/notices/favorites/remove/${noticeId}`);
  return response.data;
};

export const fetchCities = async (): Promise<Location[]> => {
  const response = await apiClient.get('/cities');
  return response.data;
};
