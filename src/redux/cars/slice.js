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
    selectedCarDescription: [],
    favoriteCars: []
  },

  isLoading: false
};

const slice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.car.favoriteCars.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) {
        state.car.favoriteCars.push(action.payload);
      } else {
        state.car.favoriteCars.splice(index, 1);
      }
    }
  },
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

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
