/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, ReactElement, useState, useContext,
} from 'react';

interface CountContextProps {
  children: ReactElement;
}

interface CountContextData {
  count: number;
  handleAdd: () => void;
}

const CountContext = createContext<CountContextData>({} as CountContextData);

export function CountProvider({ children }: CountContextProps) {
  const [count, setCount] = useState<number>(1);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, handleAdd }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
}
