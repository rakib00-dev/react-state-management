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
      const { id, text } = action.payload;

      let updatingTodo = state.todos.find((t) => t.id == id);

      if (updatingTodo) {
        updatingTodo.id = id;
        updatingTodo.text = text;
      }
    },
  },
});

export const { addTodos, removeTodos, updateTodos } = todosSlice.actions;
export default todosSlice.reducer;
