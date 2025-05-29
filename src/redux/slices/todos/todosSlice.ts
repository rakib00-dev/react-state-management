import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  initialState: { todos: [{ id: '1', text: 'hello world' }] },
  name: 'todos',
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodos, removeTodos } = todosSlice.actions;
export default todosSlice.reducer;
