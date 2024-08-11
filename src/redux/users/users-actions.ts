import { apiClient, setToken, clearToken } from '../apiClient';

export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post('/users/signin', { email, password });
  const token = response.data.token;
  setToken(token);
  return response.data;
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await apiClient.post('/users/signup', { name, email, password });
  const token = response.data.token;
  setToken(token);
  return response.data;
};

export const signOut = async () => {
  await apiClient.post('/users/signout');
  clearToken();
};

export const getCurrentUser = async () => {
  const response = await apiClient.get('/users/current');
  return response.data;
};

export const getCurrentUserFull = async () => {
  const response = await apiClient.get('/users/current/full');
  return response.data;
};
export const editCurrentUser = async (data: { name: string; email: string; phone: string; avatar?: string }) => {
  const response = await apiClient.patch('/users/current/edit', data);
  return response.data;
};
