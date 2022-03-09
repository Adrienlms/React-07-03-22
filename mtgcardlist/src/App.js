import logo from './logo.svg';
import './App.css';
import * as SDK from 'mtgsdk'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    SDK.card.find(3)
    .then(result => {
      console.log(result.card.name)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
