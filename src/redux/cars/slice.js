import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllRentCarsThunk, getCarBrandsThunk } from './operations.js';

const initialState = {
  brands: [],
  carList: [],
  isLoading: false
};

const slice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getCarBrandsThunk.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })

      .addCase(getAllRentCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carList = action.payload;
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
