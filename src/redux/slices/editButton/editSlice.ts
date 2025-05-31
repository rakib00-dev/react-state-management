import { createSlice } from '@reduxjs/toolkit';

const editButtonSlice = createSlice({
  initialState: false,
  name: 'editButton',
  reducers: {
    isClicked: (state) => {
      state = true;
    },
  },
});

export const { isClicked } = editButtonSlice.actions;
export default editButtonSlice.reducer;
