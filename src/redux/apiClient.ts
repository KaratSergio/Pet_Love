import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_DATABASE;

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const token = localStorage.getItem('token');
if (token) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const setToken = (token: string) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const clearToken = () => {
  delete apiClient.defaults.headers.common['Authorization'];
  localStorage.removeItem('token');
};
