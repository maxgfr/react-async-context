import React, { createContext, useReducer } from 'react';
import countReducer, { initialState } from '../reducer';
import createActions from '../actions';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const actions = createActions(dispatch);

  return (
    <CounterContext.Provider value={[state, actions]}>
      {children}
    </CounterContext.Provider>
  );
};
