import { useTokenContext } from './context/Context';
import { Increase } from './context-components/Increase';

const App = () => {
  const { count, setCount } = useTokenContext();
  console.log(count);

  return (
    <>
      <div onClick={() => setCount((prev) => prev + 1)}>{count}App</div>test:
      <Increase />
    </>
  );
};

export default App;
