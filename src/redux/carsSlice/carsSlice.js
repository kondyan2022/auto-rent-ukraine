import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk, fetchNextPageThunk } from './thunk';

const initialState = {
  items: [],
  page: 0,
  limit: 12,
  isLastPage: false,
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
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log('slice fullfield ', action.payload);
        state.items = action.payload;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNextPageThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNextPageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items =
          state.page === 0
            ? action.payload
            : [...state.items, ...action.payload];
        state.page += 1;
        state.isLastPage = action.payload.length < state.limit;
      })
      .addCase(fetchNextPageThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  // {
  // [fetchAllCarsThunk.pending](state){
  //         state.isLoading = true;
  //               state.error = null;
  // },
  // [fetchAllCarsThunk.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   console.log('slice fullfield ', action.payload);
  //   state.items = action.payload;
  // },
  // [fetchAllCarsThunk.rejected](state, action) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  //   },
});
export const { reset } = carsSlice.actions;
