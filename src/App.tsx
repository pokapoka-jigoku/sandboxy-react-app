import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="content">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Vite + React</h1>
      <div className="box">
        <div className="container m-2">
          Count is {count}
        </div>
        <div className="container m-2">
          <button onClick={() => setCount((count) => count + 1)} className="button is-primary m-2">
            (+)
          </button>
          <button onClick={() => setCount((count) => count - 1)} className="button is-danger m-2">
            (-)
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR. And hello, world.
        </p>
      </div>
      <p className="read-the-docs footer">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
