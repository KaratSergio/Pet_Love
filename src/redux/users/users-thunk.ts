import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp, signOut, getCurrentUser, getCurrentUserFull, editCurrentUser } from './users-actions';

export const signInUser = createAsyncThunk(
  'users/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const data = await signIn(email, password);
    return data;
  }
);

export const signUpUser = createAsyncThunk(
  'users/signUp',
  async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const data = await signUp(name, email, password);
    return data;
  }
);

export const signOutUser = createAsyncThunk('users/signOut', async () => {
  const data = await signOut();
  return data;
});

export const fetchCurrentUser = createAsyncThunk('users/fetchCurrentUser', async () => {
  const data = await getCurrentUser();
  return data;
});

export const fetchCurrentUserFull = createAsyncThunk('users/fetchCurrentUserFull', async () => {
  const data = await getCurrentUserFull();
  return data;
});

export const updateCurrentUser = createAsyncThunk('users/updateCurrentUser', async (formData: FormData) => {
  const data = await editCurrentUser(formData);
  return data;
});
