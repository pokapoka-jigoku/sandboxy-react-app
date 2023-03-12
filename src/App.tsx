import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Katan Dashboard</h1>
        <div className="box">
          <div className="card">
            ここに情報がはいる。
          </div>
          <div className="buttons m-3">
            <button onClick={() => setCount((count) => count + 1)} className="button is-primary is-rounded m-2">
              (+)
            </button>
            <button onClick={() => setCount((count) => count + 1)} className="button is-primary is-rounded m-2">
              (+)
            </button>
          </div>
          <div className="box">
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">＊個</div>
              <button className="column button is-small is-primary mx-2">＋</button>
              <button className="column button is-small is-primary mx-2">−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">＊個</div>
              <button className="column button is-small is-primary mx-2">＋</button>
              <button className="column button is-small is-primary mx-2">−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">＊個</div>
              <button className="column button is-small is-primary mx-2">＋</button>
              <button className="column button is-small is-primary mx-2">−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">＊個</div>
              <button className="column button is-small is-primary mx-2">＋</button>
              <button className="column button is-small is-primary mx-2">−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">＊個</div>
              <button className="column button is-small is-primary mx-2">＋</button>
              <button className="column button is-small is-primary mx-2">−</button>
            </div>
          </div>
          <div className="buttons m-3">
            <button onClick={() => setCount((count) => count + 1)} className="button is-primary is-rounded m-2">
              (+)
            </button>
            <button onClick={() => setCount((count) => count + 1)} className="button is-primary is-rounded m-2">
              (+)
            </button>
            <button onClick={() => setCount((count) => count + 1)} className="button is-primary m-2">
              (+)
            </button>
            <button onClick={() => setCount((count) => count - 1)} className="button is-danger m-2">
              (-)
            </button>
          </div>
        </div>
        <p className="footer">
          開発中のアプリのため、動作の保証はありません。
        </p>
      </div>
    </div>
  )
}

export default App
