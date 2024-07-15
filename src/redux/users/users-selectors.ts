import { RootState } from '../store';

export const selectUser = (state: RootState) => state.users.user;
export const selectIsLoading = (state: RootState) => state.users.isLoading;
export const selectError = (state: RootState) => state.users.error;
