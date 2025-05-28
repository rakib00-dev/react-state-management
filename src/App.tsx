import { useAppSelector } from './redux/hooks';

const App = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <>
      <h1>count is {count}</h1>
    </>
  );
};

export default App;
