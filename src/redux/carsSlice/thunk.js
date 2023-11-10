import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarItems } from '../../utils/mockapi';

export const fetchAllCarsThunk = createAsyncThunk('cars/fetchAll', async () => {
  return await getCarItems();
});

export const fetchNextPageThunk = createAsyncThunk(
  'cars/fetchNextPage',
  async (_, thunkAPI) => {
    console.log('Thunk state', thunkAPI.getState());
    const {
      cars: { page, limit },
    } = thunkAPI.getState();
    const params = { p: page + 1, l: limit };

    return await getCarItems(params);
  },
);
