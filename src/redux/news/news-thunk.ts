import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from './news-actions';
import { NewsApiResponse } from './news-type';

export const fetchNews = createAsyncThunk<NewsApiResponse, { page: number; limit: number }>(
  'news/fetchNews',
  async ({ page, limit }) => {
    const response = await getNews(page, limit);
    return response;
  }
);
