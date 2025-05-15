import { createAsyncThunk } from '@reduxjs/toolkit';
import { rentalCarApi } from '../../utils/axiosDefaultSettings.js';

export const getCarListThunk = createAsyncThunk(
  'car/carList',
  async (_, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get('/brands');
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
