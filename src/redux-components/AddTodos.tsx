import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodos } from '../redux/slices/todos/todosSlice';

const AddTodos = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodos(inputValue));
        setInputValue('');
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodos;
