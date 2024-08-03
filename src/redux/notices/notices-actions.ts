import axios from 'axios';
import { Notice, Category, Sex, Species, Location } from './notices-types';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const fetchSexes = async (): Promise<Sex[]> => {
  const response = await axios.get(`${API_URL}/sexes`);
  return response.data;
};

export const fetchSpecies = async (): Promise<Species[]> => {
  const response = await axios.get(`${API_URL}/species`);
  return response.data;
};

export const fetchLocations = async (): Promise<Location[]> => {
  const response = await axios.get(`${API_URL}/locations`);
  return response.data;
};

export const fetchNotices = async (): Promise<Notice[]> => {
  const response = await axios.get(`${API_URL}/notices`);
  return response.data;
};

export const toggleFavoriteNotice = async (noticeId: string): Promise<Notice> => {
  const response = await axios.post(`${API_URL}/notices/${noticeId}/toggle-favorite`);
  return response.data;
};
