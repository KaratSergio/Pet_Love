import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_DATABASE;

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signin`, { email, password });
  setToken(response.data.token);
  return response.data;
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signup`, { name, email, password });
  setToken(response.data.token);
  return response.data;
};

export const signOut = async () => {
  await axios.post(`${API_URL}/users/signout`);
  clearToken();
};
