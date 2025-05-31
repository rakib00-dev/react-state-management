import { createSlice } from '@reduxjs/toolkit';

const updatingIdSlice = createSlice({
  initialState: { id: '' },
  name: 'updatingIdSlice',
  reducers: {
    gettingID: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { gettingID } = updatingIdSlice.actions;
export default updatingIdSlice.reducer;
