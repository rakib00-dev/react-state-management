import { useTokenContext } from './context/Context';

export const Test = () => {
  const { count } = useTokenContext();
  return <div>test {count}</div>;
};
