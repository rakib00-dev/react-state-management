import { useTokenContext } from '../context/Context';

export const Increase = () => {
  const { count, setCount } = useTokenContext();
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Increase {count}
    </button>
  );
};
