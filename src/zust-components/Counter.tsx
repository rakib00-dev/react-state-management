import { useCounter } from '../zustand/zustand';

const Counter = () => {
  const count: any = useCounter();
  console.log(count);

  return (
    <div>
      <h1>current count is : {count.count}</h1>
      <button onClick={() => count.inc()}>Increase</button>
      <button onClick={() => count.dec()}>Decrease</button>
    </div>
  );
};

export default Counter;
