import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContext } from './context';
import { asyncIncrement, asyncDecrement, reset } from './actions';

function App() {
  const [counter, dispatch] = useContext(CounterContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter :
          {' '}
          {counter.count}
        </p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button type="button" onClick={() => asyncIncrement(dispatch, 500)}>
            Up
          </button>
          <button type="button" onClick={() => reset(dispatch)} style={{ marginLeft: 20, marginRight: 20 }}>
            Reset
          </button>
          <button type="button" onClick={() => asyncDecrement(dispatch)}>
            Down
          </button>
        </div>
        {counter.isLoading && <p style={{ fontSize: 12, marginTop: 20 }}>is loading...</p>}
      </header>
    </div>
  );
}

export default App;
