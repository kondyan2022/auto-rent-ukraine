import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritiesSlice } from './favoritiesSlice';
import { carsSlice } from './carsSlice';

export const LOCAL_STORAGE_KEY = 'root';

const favoritiesPersistConfig = {
  key: LOCAL_STORAGE_KEY,
  storage,
  whitelist: ['indexes'],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritiesPersistConfig, favoritiesSlice.reducer),
    cars: carsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
