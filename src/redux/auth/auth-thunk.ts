import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp, signOut } from '../auth/auth-actions';

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    const data = await signIn(email, password);
    return data;
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUp',
  async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const data = await signUp(name, email, password);
    return data;
  }
);

export const signOutUser = createAsyncThunk('auth/signOut', async () => {
  const data = await signOut();
  return data;
});
