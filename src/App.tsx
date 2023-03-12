import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import {  PossessedResources } from './features/PossessedResources';

function App() {
  const [possessedResources, setPossessedResources] = useState(new PossessedResources(0, 0, 0, 0, 0))

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Katan Dashboard</h1>
        <div className="box">
          <div className="card">
            ここに情報がはいる。
          </div>
          <div className="buttons m-3">
            <button onClick={() => setPossessedResources((res) => res.setToZero())} className="button is-primary is-rounded m-2">
              初期化
            </button>
            <button onClick={() => setPossessedResources((res) => res)} className="button is-primary is-rounded m-2">
              ＊
            </button>
          </div>
          <div className="box">
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🐑</div>
              <div className="column mx-2">羊毛</div>
              <div className="column mx-2">{possessedResources.wool} 個</div>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.incrementWool())}>＋</button>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.decrementWool())}>−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🌲</div>
              <div className="column mx-2">木材</div>
              <div className="column mx-2">{possessedResources.wood} 個</div>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.incrementWood())}>＋</button>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.decrementWood())}>−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🌾</div>
              <div className="column mx-2">小麦</div>
              <div className="column mx-2">{possessedResources.wheat} 個</div>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.incrementWheat())}>＋</button>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.decrementWheat())}>−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🧱</div>
              <div className="column mx-2">土材</div>
              <div className="column mx-2">{possessedResources.brick} 個</div>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.incrementBrick())}>＋</button>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.decrementBrick())}>−</button>
            </div>
            <div className="columns is-mobile is-variable is-1">
              <div className="column mx-2">🪨</div>
              <div className="column mx-2">石材</div>
              <div className="column mx-2">{possessedResources.ore} 個</div>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.incrementOre())}>＋</button>
              <button className="column button is-small is-primary mx-2"
                onClick={() => setPossessedResources((res) => res.decrementOre())}>−</button>
            </div>
          </div>
          <div className="buttons m-3">
            <button onClick={() => setPossessedResources((res) => res)} className="button is-primary is-rounded m-2">
              未実装
            </button>
            <button onClick={() => setPossessedResources((res) => res)} className="button is-primary is-rounded m-2">
              未実装
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
