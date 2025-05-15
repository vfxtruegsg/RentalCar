import { createSlice } from '@reduxjs/toolkit';
import { getCarListThunk } from './operations.js';

const initialState = {
  carList: [],
  isLoading: false
};

const slice = createSlice({
  name: 'car',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarListThunk.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCarListThunk.fulfilled, (state, action) => {
        state.carList = action.payload;
        state.isLoading = false;
      })

      .addCase(getCarListThunk.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default slice.reducer;
