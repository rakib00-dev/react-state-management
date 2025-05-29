import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter/counterSlice';
import todosSlice from './slices/todos/todosSlice';

export const store = configureStore({
  reducer: { counter: counterSlice, todos: todosSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
