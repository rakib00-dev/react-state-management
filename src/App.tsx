import { useTokenContext } from './context/Context';

const App = () => {
  const { count } = useTokenContext();
  console.log(count);

  return <div>App</div>;
};

export default App;
