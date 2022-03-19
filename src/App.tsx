import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNumber } from './hooks/01-useNumber';
import { useIsMounted } from './hooks/02-useIsMounted';

function App() {
  const [count, setCount] = useNumber(12)
  const isMounted = useIsMounted()

  console.log(isMounted)

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
