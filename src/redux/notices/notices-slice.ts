import { createSlice, PayloadAction, isPending, isRejected } from '@reduxjs/toolkit';
import {
  fetchCategoriesThunk,
  fetchSexesThunk,
  fetchSpeciesThunk,
  fetchNoticesThunk,
  fetchNoticeByIdThunk,
  addFavoriteNoticeThunk,
  removeFavoriteNoticeThunk,
  fetchCitiesThunk,
} from './notices-thunk';
import { NoticesState, Notice, Category, Sex, Species, Location } from './notices-types';

const initialState: NoticesState = {
  notices: {
    page: 1,
    perPage: 6,
    totalPages: 0,
    results: [],
  },
  categories: [],
  sexes: [],
  species: [],
  cities: [],
  isLoading: false,
  error: null,
  favoriteIds: [],
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
      const index = state.notices.results.findIndex((notice) => notice._id === action.payload);
      if (index !== -1) {
        state.notices.results[index].isFavorite = !state.notices.results[index].isFavorite;

        if (state.notices.results[index].isFavorite) {
          state.favoriteIds.push(action.payload);
        } else {
          state.favoriteIds = state.favoriteIds.filter((id) => id !== action.payload);
        }
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
      .addCase(
        fetchNoticesThunk.fulfilled,
        (state, action: PayloadAction<{ page: number; perPage: number; totalPages: number; results: Notice[] }>) => {
          state.isLoading = false;
          state.notices = action.payload;
        }
      )
      .addCase(fetchNoticeByIdThunk.fulfilled, (state, action: PayloadAction<Notice>) => {
        state.isLoading = false;
        const index = state.notices.results.findIndex((notice) => notice._id === action.payload._id);
        if (index !== -1) {
          state.notices.results[index] = action.payload;
        } else {
          state.notices.results.push(action.payload);
        }
      })
      .addCase(addFavoriteNoticeThunk.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.favoriteIds = action.payload;
        state.notices.results.forEach((notice) => {
          notice.isFavorite = action.payload.includes(notice._id);
        });
        state.isLoading = false;
      })
      .addCase(removeFavoriteNoticeThunk.fulfilled, (state, action: PayloadAction<string[]>) => {
        state.favoriteIds = action.payload;
        state.notices.results.forEach((notice) => {
          notice.isFavorite = action.payload.includes(notice._id);
        });
        state.isLoading = false;
      })
      .addCase(fetchCitiesThunk.fulfilled, (state, action: PayloadAction<Location[]>) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addMatcher(
        isPending(
          fetchCategoriesThunk,
          fetchSexesThunk,
          fetchSpeciesThunk,
          fetchNoticesThunk,
          fetchNoticeByIdThunk,
          addFavoriteNoticeThunk,
          removeFavoriteNoticeThunk,
          fetchCitiesThunk
        ),
        handlePending
      )
      .addMatcher(
        isRejected(
          fetchCategoriesThunk,
          fetchSexesThunk,
          fetchSpeciesThunk,
          fetchNoticesThunk,
          fetchNoticeByIdThunk,
          addFavoriteNoticeThunk,
          removeFavoriteNoticeThunk,
          fetchCitiesThunk
        ),
        handleRejected
      );
  },
});

export const { toggleFavorite } = noticesSlice.actions;
export default noticesSlice.reducer;
