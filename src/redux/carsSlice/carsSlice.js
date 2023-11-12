import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk, fetchNextPageThunk } from './thunk';

const initialState = {
  items: [],
  serverPagination: true,
  page: 0,
  limit: 12,
  isLastPage: true,
  isLoading: false,
  error: null,
};
export const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    reset(state) {
      state.page = 0;
      state.items = [];
    },
    nextPage(state) {
      state.page = !state.isLastPage ? state.page + 1 : state.page;
    },
    setIsLastPage(state, action) {
      state.isLastPage = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.serverPagination = false;
        state.isLastPage = state.limit >= state.items.length;
        state.page = 0;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNextPageThunk.pending, (state) => {
        state.isLoading = true;
        state.isLastPage = true;
      })
      .addCase(fetchNextPageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items =
          state.page === 0
            ? action.payload
            : [...state.items, ...action.payload];
        state.page = action.payload.length > 0 ? state.page + 1 : state.page;
        state.serverPagination = true;
        state.isLastPage = action.payload.length < state.limit;
      })
      .addCase(fetchNextPageThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isLastPage = true;
        state.error = action.payload;
      }),
});
export const { reset, nextPage, setIsLastPage } = carsSlice.actions;
