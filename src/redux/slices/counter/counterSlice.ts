import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  initialState: 0,
  name: 'counter',
  reducers: {
    Increase: (state) => {
      return state.valueOf(number) + 1;
    },
    Decrease: (state) => {
      return state.valueOf(number) - 1;
    },
  },
});
