import { createAsyncThunk } from '@reduxjs/toolkit';
import { rentalCarApi } from '../../utils/axiosDefaultSettings.js';

export const getCarBrandsThunk = createAsyncThunk(
  'car/carList',
  async (_, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get('/brands');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllRentCarsThunk = createAsyncThunk(
  'car/getAllRentCars',
  async (payload, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get('/cars', { params: payload });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDetailDescriptionCarThunk = createAsyncThunk(
  'car/getDetailDescriptionCar',
  async (carId, thunkApi) => {
    try {
      const { data } = await rentalCarApi.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
