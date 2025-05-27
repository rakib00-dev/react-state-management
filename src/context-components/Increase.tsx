import { useTokenContext } from '../context/Context';

export const Increase = () => {
  const { count } = useTokenContext();
  return <div>Increase {count}</div>;
};
