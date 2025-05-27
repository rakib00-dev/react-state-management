import { useTokenContext } from './context/Context';
import { Test } from './context-components/Test';

const App = () => {
  const { count, setCount } = useTokenContext();
  console.log(count);

  return (
    <>
      <div onClick={() => setCount((prev) => prev + 1)}>{count}App</div>test:
      <Test />
    </>
  );
};

export default App;
