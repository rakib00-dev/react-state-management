import { useTokenContext } from './context/Context';
import { Increase } from './context-components/Increase';
import { Decrease } from './context-components/Decrease';

const App = () => {
  const { count } = useTokenContext();
  console.log(count);

  return (
    <>
      <div>{count} App</div>
      <br />
      <br />
      show <b>Increased</b> Ammount : <Increase />
      <br />
      <br />
      show <b>Decrase</b> Ammount : <Decrease />
    </>
  );
};

export default App;
