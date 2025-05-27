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

const CreateContextProvider = createContext<TakeContextType | undefined>(
  undefined
);

export const useTokenContext = () => {
  const context = useContext(CreateContextProvider);
  if (!context) {
    throw new Error('Please add the context provider wrapper');
  }
  return context;
};

export const TokenContext = ({ children }: ComponentType) => {
  const [count, setCount] = useState(0);
  return (
    <CreateContextProvider.Provider value={{ count, setCount }}>
      {children}
    </CreateContextProvider.Provider>
  );
};
