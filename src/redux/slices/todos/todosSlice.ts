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
    updateTodos: (state, action) => {
      let updatingTodo = state.todos.filter((t) => t.id == action.payload.id);
      console.log(updatingTodo);
    },
  },
});

export const { addTodos, removeTodos, updateTodos } = todosSlice.actions;
export default todosSlice.reducer;
