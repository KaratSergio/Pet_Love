import { createSlice, PayloadAction, isPending, isRejected } from '@reduxjs/toolkit';
import {
  signInUser,
  signUpUser,
  signOutUser,
  fetchCurrentUser,
  fetchCurrentUserFull,
  updateCurrentUser,
} from './users-thunk';
import { UserState } from './users-types';

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: UserState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: UserState, action: any) => {
  state.isLoading = false;
  state.error = action.error.message || 'Request failed';
  console.error('Error in reducer:', action.error);
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<UserState['user']>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<UserState['user']>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        localStorage.removeItem('token');
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action: PayloadAction<UserState['user']>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUserFull.fulfilled, (state, action: PayloadAction<UserState['user']>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateCurrentUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addMatcher(
        isPending(signInUser, signUpUser, signOutUser, fetchCurrentUser, fetchCurrentUserFull, updateCurrentUser),
        handlePending
      )
      .addMatcher(
        isRejected(signInUser, signUpUser, signOutUser, fetchCurrentUser, fetchCurrentUserFull, updateCurrentUser),
        handleRejected
      );
  },
});

export default usersSlice.reducer;
