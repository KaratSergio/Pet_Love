// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersReducer from './users/users-slice';
import modalReducer from './modal/modalSlice';
import friendsReducer from './friends/friends-slice';
import noticesReducer from './notices/notices-slice';
import newsReducer from './news/news-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  users: usersReducer,
  modal: modalReducer,
  friends: friendsReducer,
  notices: noticesReducer,
  news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
