import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from './news-actions';
import { NewsApiResponse } from './news-type';

export const fetchNews = createAsyncThunk<NewsApiResponse>('news/fetchNews', async () => {
  const response = await getNews();
  return response;
});
