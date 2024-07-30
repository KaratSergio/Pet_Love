import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFriends } from './friends-actions';
import { Friend } from './friends-types';

export const fetchFriends = createAsyncThunk<Friend[]>('friends/fetchFriends', async () => {
  const friends = await getFriends();
  return friends;
});
