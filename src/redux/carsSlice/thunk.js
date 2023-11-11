import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarItems } from '../../utils/mockapi';

export const fetchAllCarsThunk = createAsyncThunk('cars/fetchAll', async () => {
  return await getCarItems();
});

export const fetchNextPageThunk = createAsyncThunk(
  'cars/fetchNextPage',
  async (data, thunkAPI) => {
    const { make } = data;
    const {
      cars: { page, limit },
    } = thunkAPI.getState();
    const params = { p: page + 1, l: limit };
    if (make && make !== 'All') {
      params.make = make;
    }
    console.log('Thunk Next page params:', params);
    return await getCarItems(params);
  },
);
