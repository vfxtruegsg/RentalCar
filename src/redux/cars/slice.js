import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllRentCarsThunk, getCarBrandsThunk } from './operations.js';

const initialState = {
  brands: [],
  carData: [],
  isLoading: false
};

const slice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getCarBrandsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })

      .addCase(getAllRentCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carData = action.payload.cars;
      })

      .addMatcher(
        isAnyOf(getCarBrandsThunk.pending, getAllRentCarsThunk.pending),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(getCarBrandsThunk.rejected, getAllRentCarsThunk.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  }
});

export default slice.reducer;
