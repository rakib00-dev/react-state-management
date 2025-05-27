import { useTokenContext } from '../context/Context';

export const Decrease = () => {
  const { setCount, count } = useTokenContext();
  return (
    <button onClick={() => setCount((prev) => prev - 1)}>
      Decrease {count}
    </button>
  );
};
