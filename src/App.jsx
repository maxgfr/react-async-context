import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContext } from './context';

function App() {
  const [counter, counterActions] = useContext(CounterContext);

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
          <button type="button" onClick={() => counterActions.asyncIncrement(500)}>
            Up
          </button>
          <button type="button" onClick={() => counterActions.reset()} style={{ marginLeft: 20, marginRight: 20 }}>
            Reset
          </button>
          <button type="button" onClick={() => counterActions.asyncDecrement()}>
            Down
          </button>
        </div>
        {counter.isLoading && <p style={{ fontSize: 12, marginTop: 20 }}>is loading...</p>}
      </header>
    </div>
  );
}

export default App;
