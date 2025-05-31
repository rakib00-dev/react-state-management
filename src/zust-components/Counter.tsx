import { useCounter } from '../zustand/zustand';

const Counter = () => {
  const count = useCounter();
  console.log(count);

  return <div>Counter</div>;
};

export default Counter;
