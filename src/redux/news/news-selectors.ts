import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.news;

export const selectNewsLoading = (state: RootState) => state.news.loading;

export const selectNewsError = (state: RootState) => state.news.error;
