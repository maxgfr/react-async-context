import React, { createContext, useReducer } from 'react';
import countReducer, { initialState } from '../reducer';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
};
