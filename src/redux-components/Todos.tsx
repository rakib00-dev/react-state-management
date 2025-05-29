import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeTodos } from '../redux/slices/todos/todosSlice';

export const Todos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  return (
    <div>
      {todos.map((e) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <h3>
            <b>{e.id}</b>
          </h3>
          <h2>{e.text}</h2>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(removeTodos(e.id))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
