import { configureStore } from '@reduxjs/toolkit';
import carReducer from './cars/slice.js';

const store = configureStore({
  reducer: {
    car: carReducer
  }
});

export default store;
