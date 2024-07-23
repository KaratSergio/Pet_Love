import axios from 'axios';

const API_URL = import.meta.env.VITE_URL_DATABASE;

const setToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signin`, { email, password });
  const token = response.data.token;
  localStorage.setItem('token', token);
  setToken(token);
  return response.data;
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/signup`, { name, email, password });
  const token = response.data.token;
  localStorage.setItem('token', token);
  setToken(token);
  return response.data;
};

export const signOut = async () => {
  await axios.post(`${API_URL}/users/signout`);
  clearToken();
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
  }
  const response = await axios.get(`${API_URL}/users/current`);
  return response.data;
};

export const getCurrentUserFull = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
  }
  const response = await axios.get(`${API_URL}/users/current/full`);
  return response.data;
};

export const editCurrentUser = async (data: { name: string; email: string; phone: string; avatar?: string }) => {
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
  }

  const response = await axios.patch(`${API_URL}/users/current/edit`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
