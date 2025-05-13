import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  carList: null
};

const slice = createSlice({
  name: 'cars',
  initialValues,
  extraReducers: (builder) => builder.addCase()
});

export default slice.reducer;
