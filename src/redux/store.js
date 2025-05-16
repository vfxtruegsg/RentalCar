import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/slice.js';

const store = configureStore({
  reducer: {
    cars: carReducer
  }
});

export default store;
