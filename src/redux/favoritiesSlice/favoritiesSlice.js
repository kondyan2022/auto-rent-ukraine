import { createSlice } from '@reduxjs/toolkit';

const initialState = { indexes: [], cacheItems: [] };

export const favoritiesSlice = createSlice({
  name: 'favorities',
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      state.indexes = state.indexes.filter((elem) => elem !== action.payload);
      state.indexes.push(action.payload);
    },
    deleteFavorite(state, action) {
      state.indexes = state.indexes.filter((elem) => elem !== action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritiesSlice.actions;
