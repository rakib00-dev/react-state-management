import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeTodos } from '../redux/slices/todos/todosSlice';

export const Todos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  console.log(todos);

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

          <button style={{ cursor: 'pointer' }} onClick={() => console.log(2)}>
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
