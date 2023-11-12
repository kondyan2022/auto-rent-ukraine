import { createSlice } from '@reduxjs/toolkit';

const initialState = { indexes: [], cacheItems: [] };

export const favoritiesSlice = createSlice({
  name: 'favorities',
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      state.indexes = [
        ...state.indexes.filter((elem) => elem !== action.payload),
        action.payload,
      ];
    },
    deleteFavorite(state, action) {
      state.indexes = state.indexes.filter((elem) => elem !== action.payload);
    },
    addToFavoriteCache(state, action) {
      state.cacheItems = [
        ...state.cacheItems.filter(({ id }) => id !== action.payload.id),
        action.payload,
      ];
    },
  },
});

export const { addFavorite, deleteFavorite, addToFavoriteCache } =
  favoritiesSlice.actions;
