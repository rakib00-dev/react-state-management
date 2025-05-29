import { useAppSelector } from '../redux/hooks';

export const Todos = () => {
  const todos = useAppSelector((state) => state.todos.todos);
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
          <button style={{ cursor: 'pointer' }}>X</button>
        </div>
      ))}
    </div>
  );
};
