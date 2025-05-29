import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodos } from '../redux/slices/todos/todosSlice';

const AddTodos = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        return dispatch(addTodos(inputValue));
      }}
    >
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodos;
