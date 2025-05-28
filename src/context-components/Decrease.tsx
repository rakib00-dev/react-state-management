import { useContext } from 'react';
import { TokenContext } from '../context/Context';

export const Decrease = () => {
  // const { setCount, count } = useTokenContext();

  let data = useContext(TokenContext);
  console.log(data);

  return (
    <button onClick={() => data?.setCount((prev) => prev - 1)}>
      Decrease {data?.count}
    </button>
  );
};
