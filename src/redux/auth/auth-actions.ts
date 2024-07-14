import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signin`, { email, password });
  return response.data;
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signup`, { name, email, password });
  return response.data;
};

export const signOut = async () => {
  const response = await axios.post(`${API_URL}/users/signout`);
  return response.data;
};
