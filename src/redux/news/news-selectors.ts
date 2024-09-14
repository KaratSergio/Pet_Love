import { RootState } from '../store';

export const selectNewsApiResponse = (state: RootState) => state.news.news;

export const selectNews = (state: RootState) => state.news.news?.results || [];

export const selectNewsLoading = (state: RootState) => state.news.isLoading;

export const selectNewsError = (state: RootState) => state.news.error;
