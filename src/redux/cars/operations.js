import { createAsyncThunk } from '@reduxjs/toolkit';
import { rentalCarApi } from '../../utils/axiosDefaultSettings.js';

export const getCarBrandsThunk = createAsyncThunk(
  'car/carList',
  async (_, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get('/brands');
      return data.cars;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllRentCarsThunk = createAsyncThunk(
  'car/getAllRentCars',
  async (payload, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get('/cars', payload);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
