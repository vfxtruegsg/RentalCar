import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllRentCarsThunk,
  getCarBrandsThunk,
  getDetailDescriptionCarThunk
} from './operations.js';

const initialState = {
  car: {
    brands: [],
    carData: [],
    selectedCarDescription: []
  },

  isLoading: false
};

const slice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(getCarBrandsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car.brands = action.payload;
      })

      .addCase(getAllRentCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car.carData = action.payload.cars;
      })

      .addCase(getDetailDescriptionCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car.selectedCarDescription = action.payload;
      })

      .addMatcher(
        isAnyOf(
          getCarBrandsThunk.pending,
          getAllRentCarsThunk.pending,
          getDetailDescriptionCarThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getCarBrandsThunk.rejected,
          getAllRentCarsThunk.rejected,
          getDetailDescriptionCarThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  }
});

export default slice.reducer;
