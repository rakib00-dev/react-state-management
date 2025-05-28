import { useAppSelector } from '../redux/hooks';

const Showing = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <div>
      the current count is <h1>{count}</h1>
    </div>
  );
};

export default Showing;
