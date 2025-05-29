import Showing from './redux-components/Showing';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increase, decrease } from './redux/slices/counter/counterSlice';

const App = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);

  todos.map((e) => console.log(e));

  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>

      <h1>this is the current count:</h1>
      <Showing />
    </>
  );
};

export default App;
