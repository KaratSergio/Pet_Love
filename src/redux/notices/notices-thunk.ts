import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchSexes,
  fetchSpecies,
  fetchLocations,
  fetchNotices,
  toggleFavoriteNotice,
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

export const fetchLocationsThunk = createAsyncThunk('notices/fetchLocations', async () => {
  const data = await fetchLocations();
  return data;
});

export const fetchNoticesThunk = createAsyncThunk('notices/fetchNotices', async () => {
  const data = await fetchNotices();
  return data;
});

export const toggleFavoriteNoticeThunk = createAsyncThunk('notices/toggleFavoriteNotice', async (noticeId: string) => {
  const data = await toggleFavoriteNotice(noticeId);
  return data;
});
