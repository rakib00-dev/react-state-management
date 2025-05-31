import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addTodos, updateTodos } from '../redux/slices/todos/todosSlice';
import { isNotClicked } from '../redux/slices/editButton/editSlice';

const AddTodos = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [updatingInputValue, setUpdatingInputValue] = useState('');

  const dispatch = useAppDispatch();
  const todos = useAppSelector((s) => s.todos.todos);
  const editBtnState = useAppSelector((state) => state.editBtn.value);
  const updatingId = useAppSelector((s) => s.UpdatingId.id);

  let updatingText = todos.find((s) => s.id == updatingId);

  console.log(updatingText);

  useEffect(() => {
    if (updatingId) {
      setUpdatingInputValue(`${updatingText?.text}`);
    }
  }, [updatingId]);

  // const updatingTodos = useAppSelector(state=> state.todos.todos.map(e=> e.id ))

  return (
    <>
      {editBtnState ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateTodos(inputValue));
            setUpdatingInputValue('');
          }}
        >
          <input
            type="text"
            value={updatingInputValue}
            onChange={(e) => setUpdatingInputValue(e.target.value)}
            required
          />
          <button type="submit" onClick={() => dispatch(isNotClicked())}>
            cancel update
          </button>
          <button type="submit">Update Todo</button>
        </form>
      ) : (
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
      )}
    </>
  );
};

export default AddTodos;
