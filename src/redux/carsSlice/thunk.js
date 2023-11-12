import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarItems } from '../../utils/mockapi';
// Коли є параметри крім автобренда, робимо цей запит для пагінації на фронті,
// бо mockapi не дає можливості виконати більш складні запити + поле ціна - рядкове зі знаком валюти
export const fetchAllCarsThunk = createAsyncThunk(
  'cars/fetchAll',
  async (data, thunkAPI) => {
    const { make } = data;
    const params = {};
    if (make && make !== 'All') {
      params.make = make;
    }
    try {
      return await getCarItems(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
//запит для  пагінації на бекенде
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
    try {
      return await getCarItems(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
