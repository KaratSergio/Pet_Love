import { createSlice, PayloadAction, isPending, isRejected } from '@reduxjs/toolkit';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchLocationsThunk,
  fetchNoticesThunk,
  toggleFavoriteNoticeThunk,
} from './notices-thunk';
import { NoticesState, Notice, Category, Sex, Species, Location } from './notices-types';

const initialState: NoticesState = {
  notices: [],
  categories: [],
  sexes: [],
  species: [],
  locations: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: NoticesState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: NoticesState, action: any) => {
  state.isLoading = false;
  state.error = action.error.message || 'Request failed';
  console.error('Error in reducer:', action.error);
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.notices.findIndex((notice) => notice.id === action.payload);
      if (index !== -1) {
        state.notices[index].isFavorite = !state.notices[index].isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchSexesThunk.fulfilled, (state, action: PayloadAction<Sex[]>) => {
        state.isLoading = false;
        state.sexes = action.payload;
      })
      .addCase(fetchSpeciesThunk.fulfilled, (state, action: PayloadAction<Species[]>) => {
        state.isLoading = false;
        state.species = action.payload;
      })
      .addCase(fetchLocationsThunk.fulfilled, (state, action: PayloadAction<Location[]>) => {
        state.isLoading = false;
        state.locations = action.payload;
      })
      .addCase(fetchNoticesThunk.fulfilled, (state, action: PayloadAction<Notice[]>) => {
        state.isLoading = false;
        state.notices = action.payload;
      })
      .addCase(toggleFavoriteNoticeThunk.fulfilled, (state, action: PayloadAction<Notice>) => {
        const index = state.notices.findIndex((notice) => notice.id === action.payload.id);
        if (index !== -1) {
          state.notices[index] = action.payload;
        }
        state.isLoading = false;
      })
      .addMatcher(
        isPending(
          fetchCategoriesThunk,
          fetchSexesThunk,
          fetchSpeciesThunk,
          fetchLocationsThunk,
          fetchNoticesThunk,
          toggleFavoriteNoticeThunk
        ),
        handlePending
      )
      .addMatcher(
        isRejected(
          fetchCategoriesThunk,
          fetchSexesThunk,
          fetchSpeciesThunk,
          fetchLocationsThunk,
          fetchNoticesThunk,
          toggleFavoriteNoticeThunk
        ),
        handleRejected
      );
  },
});

export const { toggleFavorite } = noticesSlice.actions;
export default noticesSlice.reducer;
