import { RootState } from '../store';

export const selectNotices = (state: RootState) => state.notices.notices;
export const selectCategories = (state: RootState) => state.notices.categories;
export const selectSexes = (state: RootState) => state.notices.sexes;
export const selectSpecies = (state: RootState) => state.notices.species;
export const selectLocations = (state: RootState) => state.notices.locations;
export const selectIsLoading = (state: RootState) => state.notices.isLoading;
export const selectError = (state: RootState) => state.notices.error;
