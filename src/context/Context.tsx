import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type TokenContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CreateTokenContext = createContext<TokenContext | undefined>(undefined);

export const useTokenContext = () => {
  const context = useContext(CreateTokenContext);
  if (!context) {
    throw new Error(
      'useTokenContext must be used within a TokenContextProvider'
    );
  }
  return context;
};

export const TokenContext = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CreateTokenContext.Provider value={{ count, setCount }}>
      {children}
    </CreateTokenContext.Provider>
  );
};
