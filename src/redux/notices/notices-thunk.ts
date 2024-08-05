import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchSexes,
  fetchSpecies,
  fetchNotices,
  fetchNoticeById,
  addFavoriteNotice,
  removeFavoriteNotice,
  fetchCities,
} from './notices-actions';

export const fetchCategoriesThunk = createAsyncThunk('notices/fetchCategories', async () => {
  const data = await fetchCategories();
  return data;
});

export const fetchSexesThunk = createAsyncThunk('notices/fetchSexes', async () => {
  const data = await fetchSexes();
  return data;
});

export const fetchSpeciesThunk = createAsyncThunk('notices/fetchSpecies', async () => {
  const data = await fetchSpecies();
  return data;
});

export const fetchNoticesThunk = createAsyncThunk(
  'notices/fetchNotices',
  async ({ page, perPage }: { page: number; perPage: number }) => {
    const data = await fetchNotices(page, perPage);
    return data;
  }
);

export const fetchNoticeByIdThunk = createAsyncThunk('notices/fetchNoticeById', async (noticeId: string) => {
  const data = await fetchNoticeById(noticeId);
  return data;
});

export const addFavoriteNoticeThunk = createAsyncThunk('notices/addFavoriteNotice', async (noticeId: string) => {
  const data = await addFavoriteNotice(noticeId);
  return data;
});

export const removeFavoriteNoticeThunk = createAsyncThunk('notices/removeFavoriteNotice', async (noticeId: string) => {
  const data = await removeFavoriteNotice(noticeId);
  return data;
});

export const fetchCitiesThunk = createAsyncThunk('notices/fetchCities', async () => {
  const data = await fetchCities();
  return data;
});
