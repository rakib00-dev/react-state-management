import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { isClicked } from '../redux/slices/editButton/editSlice';
import { removeTodos } from '../redux/slices/todos/todosSlice';

export const Todos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  // console.log(todos);

  const editBtnState = useAppSelector((state) => state.editBtn);
  console.log(editBtnState);

  return (
    <div>
      {todos.map((e, i) => (
        <div
          key={e.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span>{i + 1}.</span>
          <p>id: {e.id.slice(0, 5)}...</p>
          <br />
          <br />
          <h2>{e.text}</h2>

          <button
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(isClicked())}
          >
            EDIT
          </button>

          <button
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(removeTodos(e))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
