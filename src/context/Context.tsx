import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type TakeContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type ComponentType = {
  children: ReactNode;
};

export const TokenContext = createContext<TakeContextType | undefined>(
  undefined
);

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('Please add the context provider wrapper');
  }
  return context;
};

export const TokenProvider = ({ children }: ComponentType) => {
  const [count, setCount] = useState(0);
  return (
    <TokenContext.Provider value={{ count, setCount }}>
      {children}
    </TokenContext.Provider>
  );
};
