import { createContext, useContext, useState } from 'react';

const CreateTokenContext = createContext(null);

export const useTokenContext = () => {
  return useContext(CreateTokenContext);
};

export const TokenContext = () => {
  const [count, setCount] = useState(0);

  return (
    <CreateTokenContext.Provider value={{ count, setCount }}>
      Context
    </CreateTokenContext.Provider>
  );
};
