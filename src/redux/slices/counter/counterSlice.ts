import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  initialState: 0,
  name: 'counter',
  reducers: {
    increase: (state) => {
      return state + 1;
    },
    decrease: (state) => {
      return state - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
