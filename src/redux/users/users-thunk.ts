import axios from 'axios';
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

export const updateCurrentUser = createAsyncThunk(
  'users/updateCurrentUser',
  async (formData: { name: string; email: string; phone: string; avatar?: string }, { rejectWithValue }) => {
    try {
      const response = await editCurrentUser(formData);

      return response.data;
    } catch (error: any) {
      console.error('Error in updateCurrentUser:', error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue('Unexpected error');
    }
  }
);
