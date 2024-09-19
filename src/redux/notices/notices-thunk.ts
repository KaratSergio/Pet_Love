import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
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

import { FetchNoticesParams } from './notices-types';

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

// export const fetchNoticesThunk = createAsyncThunk(
//   'notices/fetchNotices',
//   async ({ page, perPage }: { page: number; perPage: number }) => {
//     const data = await fetchNotices(page, perPage);
//     return data;
//   }
// );

export const fetchNoticesThunk = createAsyncThunk(
  'notices/fetchNotices',
  async ({ page, perPage, keyword, category, sex, species, location, filter }: FetchNoticesParams) => {
    const data = await fetchNotices(page, perPage, keyword, category, sex, species, location, filter);
    return data;
  }
);

export const fetchNoticeByIdThunk = createAsyncThunk('notices/fetchNoticeById', async (noticeId: string) => {
  const data = await fetchNoticeById(noticeId);
  return data;
});

export const addFavoriteNoticeThunk = createAsyncThunk(
  'notices/addFavoriteNotice',
  async (noticeId: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const favoriteIds = state.notices.favoriteIds || [];

    if (favoriteIds.includes(noticeId)) {
      return rejectWithValue('Notice already added to favorites.');
    }

    try {
      const data = await addFavoriteNotice(noticeId);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to add notice to favorites.');
    }
  }
);

export const removeFavoriteNoticeThunk = createAsyncThunk(
  'notices/removeFavoriteNotice',
  async (noticeId: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const favoriteIds = state.notices.favoriteIds || [];

    if (!favoriteIds.includes(noticeId)) {
      return rejectWithValue('Notice is not in favorites.');
    }

    try {
      const data = await removeFavoriteNotice(noticeId);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to remove notice from favorites.');
    }
  }
);

export const fetchCitiesThunk = createAsyncThunk('notices/fetchCities', async () => {
  const data = await fetchCities();
  return data;
});
