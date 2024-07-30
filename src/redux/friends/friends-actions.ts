import axios from 'axios';
import { Friend } from './friends-types';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const getFriends = async (): Promise<Friend[]> => {
  const response = await axios.get(`${API_URL}/friends`);
  return response.data;
};
