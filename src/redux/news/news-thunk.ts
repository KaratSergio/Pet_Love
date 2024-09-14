import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from './news-actions';
import { News } from './news-type';

export const fetchNews = createAsyncThunk<News[]>('news/fetchNews', async () => {
  const news = await getNews();
  return news;
});
