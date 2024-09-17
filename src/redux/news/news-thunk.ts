import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from './news-actions';
import { NewsApiResponse } from './news-type';

export const fetchNews = createAsyncThunk<NewsApiResponse, { page: number; limit: number; keyword?: string }>(
  'news/fetchNews',
  async ({ page, limit, keyword }) => {
    const response = await getNews(page, limit, keyword);
    return response;
  }
);
