// imports
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increase, decrease } from './redux/slices/counter/counterSlice';

// components
import AddTodos from './redux-components/AddTodos';
import Showing from './redux-components/Showing';
import { Todos } from './redux-components/Todos';

const App = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 style={{ placeItems: 'center', display: 'grid' }}>Redux Toolkit</h1>
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>
      <h1>this is the current count:</h1>
      <Showing />
      <h1>todos</h1>
      <AddTodos />
      <Todos />
      <br />
      <br />
      <h1 style={{ placeItems: 'center', display: 'grid' }}>Jotai</h1>
    </>
  );
};

export default App;
