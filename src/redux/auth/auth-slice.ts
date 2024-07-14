import { createSlice, PayloadAction, isPending, isRejected } from '@reduxjs/toolkit';
import { signInUser, signUpUser, signOutUser } from './auth-thunk';
import { AuthState } from './auth-types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: AuthState, action: any) => {
  state.isLoading = false;
  state.error = action.error.message || 'Request failed';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<{ email: string; name: string; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<{ email: string; name: string; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addMatcher(isPending(signInUser, signUpUser, signOutUser), handlePending)
      .addMatcher(isRejected(signInUser, signUpUser, signOutUser), handleRejected);
  },
});

export default authSlice.reducer;
