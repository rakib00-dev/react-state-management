import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter/counterSlice';
import todosSlice from './slices/todos/todosSlice';
import editSlice from './slices/editButton/editSlice';
import gettingUpdatingId from './slices/updatingId/updatingIdSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    editBtn: editSlice,
    UpdatingId: gettingUpdatingId,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
