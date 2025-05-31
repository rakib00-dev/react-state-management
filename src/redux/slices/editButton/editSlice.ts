import { createSlice } from '@reduxjs/toolkit';

const editButtonSlice = createSlice({
  initialState: { value: false },
  name: 'editButton',
  reducers: {
    isClicked: (state) => {
      state.value = true;
    },
    isNotClicked: (state) => {
      state.value = false;
    },
  },
});

export const { isClicked, isNotClicked } = editButtonSlice.actions;
export default editButtonSlice.reducer;
